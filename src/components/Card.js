function Card(){
    return(
        <div className="card">
          <div className="favorite">
            <img src="img/heartFalse.svg" alt="Unliked" />
          </div>
          <img
            width={133}
            height={112}
            src="/img/sneakers/1.svg"
            alt="First sneakers"
          />
          <p>Nike Blazer Mid Suede</p>
          <div className="cardDescription">
            <b>3780 грн</b>
            <button className="button">
              <img width={11} height={11} src="/img/add.svg" alt="Add" />
            </button>
          </div>
        </div>
        );
}

export default Card;