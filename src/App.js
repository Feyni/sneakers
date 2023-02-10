import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
      axios.get("https://63dce3b5367aa5a7a4041169.mockapi.io/items").then((res)=>{
        setItems(res.data);
      });
      axios.get("https://63dce3b5367aa5a7a4041169.mockapi.io/cart").then((res)=>{
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://63dce3b5367aa5a7a4041169.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem=(id)=>{
    axios.delete(`https://63dce3b5367aa5a7a4041169.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item=>item.id != id));
  }

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="headerContent">
          <h1>
          Кроссовки
          </h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                className="clear"
                src="/img/btn-remove.svg"
                alt="Clear"
                onClick={() => setSearchValue("")}
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск"
            />
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => console.log(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
