import React from 'react';
import Card from "../components/Card";

function Home({ items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  isLoading }) {

  const renderItems = () => {
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return ((isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ))
    );
  }

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
      {renderItems()}
    </div>
  </div>);

}

export default Home;