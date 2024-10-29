// src/api/stockAPI.test.js
import axios from "axios";
import { fetchStockData } from "./stockAPI";

jest.mock("axios");

test("fetches and formats stock data correctly", async () => {
    // Mock the response from Axios
    axios.get.mockResolvedValue({
        data: { c: 150, pc: 145 }, // Mocked response data structure
    });

    const stocks = await fetchStockData();
    expect(stocks[0]).toEqual({
        symbol: "AAPL",
        price: 150,
        change: ((150 - 145) / 145) * 100,
    });
});
