import React from 'react';
import PropTypes from 'prop-types';
import StockItem from '../StockItem';
import './index.scss';

const StockList = ({ stocks }) => (
    <div className="stock-list">
        {stocks.map((stock) => (
            <StockItem
                key={stock.symbol}
                symbol={stock.symbol}
                price={stock.price}
                change={stock.change}
            />
        ))}
    </div>
);

StockList.propTypes = {
    stocks: PropTypes.arrayOf(
        PropTypes.shape({
            symbol: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            change: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default StockList;
