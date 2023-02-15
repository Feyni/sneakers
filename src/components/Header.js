import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="headerLeft">
          <img width={60} height={60} src="/img/logo2.svg" alt="Logo" />
          <div>
            <h3>DRIP SNEAKERS</h3>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li className="cart" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span className="price">2150 грн</span>
        </li>

        <li className="favoriteButton">
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              width={20}
              height={20}
              src="/img/favorite.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
