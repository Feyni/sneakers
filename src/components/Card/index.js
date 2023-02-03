import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickFavorite}>
        <img src="img/heartFalse.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="First sneakers" />
      <p>{props.title}</p>
      <div className="cardDescription">
        <b>{props.price} грн.</b>
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
