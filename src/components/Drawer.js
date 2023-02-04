function Drawer({onClickClose,items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
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

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
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
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
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
