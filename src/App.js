import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Nike Blazer Mid Suede",
    price: 3780,
    imageUrl: "/img/sneakers/1.svg",
  },
  { title: "Nike Air Max 270", price: 4490, imageUrl: "/img/sneakers/2.svg" },
  {
    title: "Nike Blazer Mid Suede",
    price: 4200,
    imageUrl: "/img/sneakers/3.svg",
  },
  {
    title: "Puma X Aka Boku Future Rider",
    price: 2900,
    imageUrl: "/img/sneakers/4.svg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="headerContent">
          <h1>Кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} onClick={()=>console.log(obj)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
