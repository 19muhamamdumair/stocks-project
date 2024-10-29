// src/components/StockItem.test.js
import { render, screen } from "@testing-library/react";
import StockItem from "./StockItem";

test("renders stock item with positive change", () => {
    render(<StockItem symbol="AAPL" price={150} change={1.5} />);
    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("$150.00")).toBeInTheDocument();
    expect(screen.getByText("1.50%")).toHaveClass("positive");
});

test("renders stock item with negative change", () => {
    render(<StockItem symbol="MSFT" price={250} change={-0.5} />);
    expect(screen.getByText("MSFT")).toBeInTheDocument();
    expect(screen.getByText("$250.00")).toBeInTheDocument();
    expect(screen.getByText("-0.50%")).toHaveClass("negative");
});
