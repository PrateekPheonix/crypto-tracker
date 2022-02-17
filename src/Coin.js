import React, { useState } from 'react'
import './coin.css'
import CoinChart from './CoinChart';

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {

    const [activeGraph, setActiveGraph] = useState(false);

    const showGraph = () => {
        activeGraph === false ?
            setActiveGraph(true)
            : setActiveGraph(false)
    }

    return (
        <div className='border-bottom'>
            <div className="coin-container">
                <div onClick={showGraph} className="coin-row">
                    <div className="coin">
                        <img src={image} alt="crypto" />
                        <h1>{name}</h1>
                        <p className="coin-symbol">{symbol}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">₹ {price.toLocaleString('hi-IN')}</p>
                        <p className="coin-volume">₹ {volume.toLocaleString('hi-IN')}</p>
                        {priceChange < 0
                            ? (
                                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                            )
                            : (
                                <p className="coin-percent green">+{priceChange.toFixed(2)}%</p>
                            )
                        }
                        <p className="coin-marketcap"> <span className="mktcap"> Market Cap :</span> ₹ {marketcap.toLocaleString('hi-IN')}</p>
                    </div>
                </div>
            </div>
            {activeGraph === true ? <CoinChart /> : <div></div>}
        </div>
    )
}

export default Coin
