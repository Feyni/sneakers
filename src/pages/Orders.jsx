import axios from 'axios';
import React from 'react';
import Card from '../components/Card'
import AppContext from '../context';

function Orders() {
    const { onAddToFavorite } = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://63f295c1f28929a9df5cd1a5.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert("Ошибка при запросе заказов");
                console.log(error);
            }
        })();

    }, []);

    return (<div className="content">
        <div className="headerContent">
            <h1>
                Мои заказы
            </h1>
        </div>

        <div className="sneakers">
            {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                <Card key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    loading={isLoading}
                    {...item} />

            ))}
        </div>
    </div>);
}

export default Orders;