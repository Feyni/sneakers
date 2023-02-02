import styles from './Card.module.scss';

console.log(styles);

function Card(props){
    return(
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img src="img/heartFalse.svg" alt="Unliked" />
          </div>
          <img
            width={133}
            height={112}
            src={props.imageUrl}
            alt="First sneakers"
          />
          <p>{props.title}</p>
          <div className="cardDescription">
            <b>{props.price} грн.</b>
            <button className="button" onClick={props.onClick}>
              <img width={11} height={11} src="/img/add.svg" alt="Add" />
            </button>
          </div>
        </div>
        );
}

export default Card;