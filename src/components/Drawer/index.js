import axios from "axios";
import React from "react";

import Info from "../Info";
import { useCart } from "../../hooks/useCart";

import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClickClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63f295c1f28929a9df5cd1a5.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://63dce3b5367aa5a7a4041169.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Не удалось создать заказ");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={`${styles.drawer}`}>
        <h2>
          Корзина
          <img
            className="removeBtn"
            width={32}
            height={32}
            src="/img/btn-remove.svg"
            alt="Close"
            onClick={onClickClose}
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <div className="qwewq">
                    <img
                      className="sneakersCart"
                      width={70}
                      height={70}
                      src={obj.imageUrl}
                      alt="Second sneakers"
                    />
                    <div className="descriptionItem">
                      <p>{obj.title}</p>
                      <b>{obj.price} грн.</b>
                    </div>
                  </div>
                  <img
                    className="removeBtn"
                    width={32}
                    height={32}
                    src="/img/btn-remove.svg"
                    alt="Remove"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li className="cartСonclusion">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} грн</b>
                </li>
                <li className="cartTax">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} грн</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
            }
            image={isOrderComplete ? "/img/complete-order.png" : "/img/box.png"}
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
