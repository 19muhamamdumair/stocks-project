import axios from 'axios';

const API_KEY = 'csb1qvpr01qobflkgnagcsb1qvpr01qobflkgnb0'; // Replace with your Finnhub API Key

const symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NFLX', 'NVDA', 'FB', 'BABA', 'V'];

export const fetchStockData = async () => {
    try {
        const stockPromises = symbols.map(async (symbol) => {
            const response = await axios.get(
                `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
            );
            const data = response.data;
            return {
                symbol: symbol,
                price: data.c,   // Current price
                change: ((data.c - data.pc) / data.pc) * 100,  // Percentage change from previous close
            };
        });

        const stocks = await Promise.all(stockPromises);
        return stocks;
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return [];
    }
};
