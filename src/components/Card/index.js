import React from "react";
import styles from "./Card.module.scss";

function Card({title, imageUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="img/heartFalse.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="First sneakers" />
      <p>{title}</p>
      <div className="cardDescription">
        <b>{price} грн.</b>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-add.svg" : "/img/btn-plus.svg"}
          alt="Add"
        />
      </div>
    </div>
  );
}

export default Card;
