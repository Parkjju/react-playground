import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState('');
    const [buyCoin, setBuyCoin] = useState('');
    const [canBuy, setCanBuy] = useState(false);
    const [coinNum, setCoinNum] = useState(0);

    const base = 'https://api.coinpaprika.com/v1/';
    useEffect(() => {
        fetch(`${base}tickers`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCoins(data);
                setLoading(false);
            });
    }, []);

    const onChange = (event) => {
        setMoney(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (money == '') {
            return;
        }
        setMoney(event.target.value);

        if (Number(money) < Number(buyCoin)) {
            setCanBuy(false);
        } else {
            setCanBuy(true);
            setCoinNum(Math.floor(Number(money) / Number(buyCoin)));
        }
        setMoney('');
    };
    const onSelect = (event) => {
        const coinInfo = event.target.value;
        const splitPrice = coinInfo.split(' ');
        splitPrice.splice(splitPrice.length - 1, 1);
        const coinPrice = splitPrice.splice(splitPrice.length - 1, 1);

        setBuyCoin(coinPrice);
    };

    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : null}
            <select onChange={onSelect}>
                {coins.map((item) => {
                    return (
                        <option key={item.id}>
                            {item.name} ({item.symbol}): {item.quotes.USD.price}{' '}
                            USD
                        </option>
                    );
                })}
            </select>
            <form onSubmit={onSubmit}>
                <input
                    placeholder='Type your money..'
                    type='text'
                    value={money}
                    onChange={onChange}
                />
            </form>
            {canBuy ? <strong>You can Buy {coinNum}!</strong> : null}
        </div>
    );
}
export default App;
