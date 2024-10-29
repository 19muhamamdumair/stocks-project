import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const StockItem = ({ symbol, price, change }) => {
    const changeClass = change > 0 ? 'positive' : 'negative';

    return (
        <div className={`stock-item ${changeClass}`}>
            <div className="stock-symbol">{symbol}</div>
            <div className="stock-price">${price.toFixed(2)}</div>
            <div className={`stock-change ${changeClass}`}>
                {change.toFixed(2)}%
            </div>
        </div>
    );
};

StockItem.propTypes = {
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
};

export default StockItem;
