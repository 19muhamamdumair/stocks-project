// src/components/StockList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import StockList from "./index";

const stocks = [
    { symbol: "AAPL", price: 150, change: 1.5 },
    { symbol: "MSFT", price: 250, change: -0.5 },
];

test("renders list of stocks", () => {
    render(<StockList stocks={stocks} />);
    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("MSFT")).toBeInTheDocument();
});
