import React from 'react';
import { useSelector } from 'react-redux';
import NavbarDetails from './NavbarDetail';
import Footer from './Footer';
import { selectDetails, selectDetailsStatus } from '../redux/DetailsSlice/DetailsSlice';
import styling from '../styles/Details.module.css';

const Detailpage = () => {
  const detail = useSelector(selectDetails);
  const detailStatus = useSelector(selectDetailsStatus);

  if (detailStatus === 'loading') {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <NavbarDetails />
      {detail && (
        <>
          <main>
            <div className={styling.wrapper}>
              <img src={detail.icon} alt={detail.name} className={styling.icon} />
              <h1 className={styling.head}>{detail.name}</h1>
            </div>
            <div className={styling.update}>Crypto Update</div>
            <div className={styling.detailContain}>
              <div className={styling.details}>
                <p className={styling.text}>Name:</p>
                <p className={styling.text}>{detail.name}</p>
              </div>
              <div className={styling.details}>
                <p className={styling.text}>Price:</p>
                <p className={styling.text}>
                  <span>$</span>
                  {detail.price}
                </p>
              </div>
              <div className={styling.details}>
                <p className={styling.text}>Volume:</p>
                <p className={styling.text}>{detail.volume}</p>
              </div>
              <div className={styling.details}>
                <p className={styling.text}>Available Supply:</p>
                <p className={styling.text}>{detail.availableSupply}</p>
              </div>
              <div className={styling.details}>
                <p className={styling.text}>Total Supply:</p>
                <p className={styling.text}>{detail.totalSupply}</p>
              </div>
            </div>
            <div className={styling.more}>
              More Info
            </div>

            <div className={styling.detailContain}>
              <div className={styling.details}>
                <p className={styling.text}>Symbol:</p>
                <p className={styling.text}>{detail.symbol}</p>
              </div>
              <div className={styling.details}>
                <p className={styling.text}>MarketCap:</p>
                <p className={styling.text}>
                  <span>$</span>
                  {detail.marketCap}
                </p>
              </div>
              <div className={styling.details}>
                <p className={styling.text}>PriceChange1h:</p>
                <p className={styling.text}>
                  <span>$</span>
                  {detail.priceChange1h}
                </p>
              </div>
              <div className={styling.details}>
                <p className={styling.text}>PriceChange1d:</p>
                <p className={styling.text}>
                  <span>$</span>
                  {detail.priceChange1d}
                </p>
              </div>
              <div className={styling.details}>
                <p className={styling.text}>PriceChange1w:</p>
                <p className={styling.text}>
                  <span>$</span>
                  {detail.priceChange1w}
                </p>
              </div>
            </div>
          </main>
          <Footer />

        </>
      )}
    </>
  );
};

export default Detailpage;
