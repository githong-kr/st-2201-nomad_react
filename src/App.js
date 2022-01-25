import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [index, setIndex] = useState(-1);

  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  const onChange = (event) => setMoney(event.target.value);

  useEffect(() => {
    const getCoins = async () => {
      const result = await fetch(`https://api.coinpaprika.com/v1/tickers`);
      setCoins(await result.json());
      setLoading(false);
    };
    getCoins();
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? null : ` (${coins.length})`}</h1>
      {loading ? (
        `Loading...`
      ) : (
        <div>
          <div>
            <input
              onChange={onChange}
              value={money}
              type="number"
              placeholder="Type your money..."
            />
          </div>
          <hr />
          <div>
            <select onChange={onSelect}>
              <option value="-1">Select the coin...</option>
              {coins.map((item, index) => {
                return (
                  <option
                    key={item.id}
                    value={index}
                  >{`${item.name} (${item.symbol}) : $${item.quotes.USD.price} USD`}</option>
                );
              })}
            </select>
          </div>
          <div>
            {index === -1 ? null : (
              <h2>
                You can buy {money / coins[index].quotes.USD.price}
                {coins[index].symbol}
              </h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
