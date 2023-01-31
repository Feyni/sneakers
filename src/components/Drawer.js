function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
    <div className="drawer">
      <h2>
        Корзина
        <img
          className="removeBtn"
          width={32}
          height={32}
          src="/img/btn-remove.svg"
          alt="Remove"
        />
      </h2>

      <div className="items">
        <div className="cartItem">
          <img
            className="sneakersCart"
            width={70}
            height={70}
            src="/img/sneakers/2.svg"
            alt="Second sneakers"
          />
          <div className="descriptionItem">
            <p>Puma X Aka Boku Future Rider</p>
            <b>1890 грн</b>
          </div>
          <img
            className="removeBtn"
            width={32}
            height={32}
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </div>

        <div className="cartItem">
          <img
            className="sneakersCart"
            width={70}
            height={70}
            src="/img/sneakers/2.svg"
            alt="Second sneakers"
          />
          <div className="descriptionItem">
            <p>Puma X Aka Boku Future Rider</p>
            <b>1890 грн</b>
          </div>
          <img
            className="removeBtn"
            width={32}
            height={32}
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </div>
      </div>
      <div className="cartTotalBlock">
        <ul className="cartTotalBlock">
          <li className="cartСonclusion">
            <span>Итого:</span>
            <div></div>
            <b>6380 грн</b>
          </li>
          <li className="cartTax">
            <span>Налог 5%:</span>
            <div></div>
            <b>319 грн</b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
    </div>
  );
}
export default Drawer;