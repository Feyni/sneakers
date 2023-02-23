import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const itemObj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(itemObj);
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={186}
          viewBox="0 0 150 186"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="125" rx="3" ry="3" width="90" height="15" />
          <rect x="0" y="160" rx="8" ry="8" width="80" height="25" />
          <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            {onClickFavorite && (
              <img
                src={isFavorite ? "img/heartTrue.svg" : "img/heartFalse.png"}
                alt="Unliked"
                onClick={onClickFavorite}
              />
            )}
          </div>
          <img width={133} height={112} src={imageUrl} alt="First sneakers" />
          <p>{title}</p>
          <div className="cardDescription">
            <b>{price} грн.</b>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? "/img/btn-add.svg" : "/img/btn-plus.svg"}
                alt="Add"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
