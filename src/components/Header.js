function Header(props){
    return(
        <header>
        <div className="headerLeft">
          <img width={60} height={60} src="/img/logo2.svg" alt="Logo" />
          <div>
            <h3>DRIP SNEAKERS</h3>
          </div>
        </div>
        <ul className="headerRight">
          <li className="li1" onClick={props.onClickCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
            <span className="price">2150 грн</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
    );
}

export default Header;