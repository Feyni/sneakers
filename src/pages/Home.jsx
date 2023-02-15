import Card from "../components/Card";
function Home({ items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite }) {
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
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            {...item}
          />
        ))}
    </div>
  </div>);

}

export default Home;