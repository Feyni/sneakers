import React from 'react'
import AppContext from '../context';

const Info = ({ title, image, description }) => {

    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="emptyDrawer">
            <img className='boxImage' width={120} src={image} alt="Box" />
            <h3>{title}</h3>

            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                <img src="/img/arrow.svg" alt="arrow" />Вернуться назад
            </button>
        </div>
    )
}

export default Info;