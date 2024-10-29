import React, { useState, useEffect } from 'react';
import StockList from '../../components/StockList';
import Filter from '../../components/Filter';
import useStocks from '../../hooks/useStocks';
import './index.scss';

const MainPage = () => {
    const { stocks, loading, error } = useStocks();

    const [threshold, setThreshold] = useState(() => {
        return localStorage.getItem('threshold') ? Number(localStorage.getItem('threshold')) : 0;
    });

    const [sortBy, setSortBy] = useState(() => {
        return localStorage.getItem('sortBy') || 'price';
    });

    const [sortDirection, setSortDirection] = useState(() => {
        return localStorage.getItem('sortDirection') || 'descending';
    });

    useEffect(() => {
        localStorage.setItem('threshold', threshold);
        localStorage.setItem('sortBy', sortBy);
        localStorage.setItem('sortDirection', sortDirection);
    }, [threshold, sortBy, sortDirection]);

    const filteredStocks = stocks.filter(stock => (stock.change) > threshold);

    const sortedStocks = filteredStocks.sort((a, b) => {
        const order = sortDirection === 'ascending' ? 1 : -1;
        if (sortBy === 'price') {
            return order * (a.price - b.price);
        } else if (sortBy === 'change') {
            return order * (a.change - b.change);
        }
        return 0;
    });

    if (loading) return <div>Loading stocks...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="main-page">
            <h1>Stock Monitoring Dashboard</h1>

            <Filter threshold={threshold} setThreshold={setThreshold} />

            <div className="sort-controls">
                <label htmlFor="sortBy">Sort By:</label>
                <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="price">Price</option>
                    <option value="change">Percentage Change</option>
                </select>

                <label htmlFor="sortDirection">Order:</label>
                <select id="sortDirection" value={sortDirection} onChange={(e) => setSortDirection(e.target.value)}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>

            <StockList stocks={sortedStocks} />
        </div>
    );
};

export default MainPage;
