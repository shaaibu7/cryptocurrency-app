import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SiBuzzfeed } from 'react-icons/si';
import { fetchCryptos, selectCryptos, selectCryptoStatus } from '../redux/HomeSlice/CryptoSlice';
import Navbar from './Navbar';
import Header from './Header';
import styling from '../styles/Homepage.module.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector(selectCryptos);
  const cryptoStatus = useSelector(selectCryptoStatus);

  useEffect(() => {
    if (cryptoStatus === 'idle') {
      dispatch(fetchCryptos());
    }
  }, [cryptoStatus, dispatch]);

  if (cryptoStatus === 'loading') {
    return <h1>Loading....</h1>;
  }
  return (
    <main>
      <Navbar />
      <Header />
      <input type="text" className={styling.inputData} placeholder="Search Crypto`s" />
      <div className={styling.cryptoContainer}>
        {cryptos.map((crypto) => (
          <div key={crypto.id} className={styling.crypto}>
            <div className={styling.contain}>
              <img
                src={crypto.icon}
                alt={crypto.name}
                key={crypto.id}
                className={styling.image}
              />
              <SiBuzzfeed className={styling.feed} />
            </div>
            <div>
              <h3 className={styling.item}>{crypto.name}</h3>
              <h4 className={styling.item}>
                <span>$</span>
                {crypto.price.toFixed(2)}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Homepage;
