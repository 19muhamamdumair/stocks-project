import { useState, useEffect } from 'react';
import { fetchStockData } from '../api/stockAPI';

const useStocks = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const stockData = await fetchStockData();
                setStocks(stockData);
                setLoading(false);
            } catch (err) {
                setError('Failed to load stock data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { stocks, loading, error };
};

export default useStocks;
