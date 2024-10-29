// src/App.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

// Mock the useStocks hook
jest.mock("./hooks/useStocks", () => ({
    __esModule: true,
    default: () => ({
        stocks: [
            { symbol: "AAPL", price: 150, change: 1.5 },
            { symbol: "MSFT", price: 250, change: -0.5 }
        ],
        loading: false,
        error: null
    }),
}));

test("renders Stock Monitoring Dashboard", async () => {
    render(<App />);

    // Wait for the dashboard text to appear
    await waitFor(() => {
        expect(screen.getByText(/Stock Monitoring Dashboard/i)).toBeInTheDocument();
    });
});
