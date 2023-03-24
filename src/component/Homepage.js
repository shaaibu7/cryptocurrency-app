import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SiBuzzfeed } from 'react-icons/si';
import { BiLoaderCircle } from 'react-icons/bi';
import { fetchCryptos, selectCryptos, selectCryptoStatus } from '../redux/HomeSlice/CryptoSlice';
import { fetchDetails } from '../redux/DetailsSlice/DetailsSlice';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import styling from '../styles/Homepage.module.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();
  const cryptos = useSelector(selectCryptos);
  const cryptoStatus = useSelector(selectCryptoStatus);

  useEffect(() => {
    if (cryptoStatus === 'idle') {
      dispatch(fetchCryptos());
    }
  }, [cryptoStatus, dispatch]);

  const clickFeed = (id) => {
    dispatch(fetchDetails(id));
    navigate(`/details/${id}`);
  };

  if (cryptoStatus === 'loading') {
    return <BiLoaderCircle size={50} className={styling.loader} />;
  }
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <input
          type="text"
          className={styling.inputData}
          placeholder="Search Crypto`s"
          value={search.get('filter') || ''}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
        <div className={styling.cryptoContainer}>
          {cryptos.filter((crypto) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const name = crypto.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
            .map((crypto) => (
              <div key={crypto.id} className={styling.crypto}>
                <div className={styling.contain}>
                  <img
                    src={crypto.icon}
                    alt={crypto.name}
                    key={crypto.id}
                    className={styling.image}
                  />
                  <SiBuzzfeed className={styling.feed} onClick={() => clickFeed(crypto.id)} />
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
      <Footer />

    </>
  );
};

export default Homepage;
