import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([
    {
      title: "Nike Blazer Mid Suede",
      price: 3780,
      imageUrl: "/img/sneakers/1.svg",
    },
    { 
      title: "Nike Air Max 270",
      price: 4490,
      imageUrl: "/img/sneakers/2.svg" 
    },
  ]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://63dce3b5367aa5a7a4041169.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="headerContent">
          <h1>Кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavorite={() => console.log("Любимое")}
              onClickPlus={() => console.log("Плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
