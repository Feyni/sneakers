import Card from "../components/Card";
function Home({ items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart }) {
  return (<div className="content">
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
  </div>);

}

export default Home;