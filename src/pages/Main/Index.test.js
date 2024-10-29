// src/pages/Main.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "./index";
import useStocks from "../../hooks/useStocks";

// Mock the custom hook
jest.mock("../../hooks/useStocks");

test("renders loading message", () => {
    useStocks.mockReturnValue({ stocks: [], loading: true, error: null });
    render(<MainPage />);
    expect(screen.getByText(/Loading stocks.../i)).toBeInTheDocument();
});

test("renders error message", () => {
    useStocks.mockReturnValue({ stocks: [], loading: false, error: "Error fetching data" });
    render(<MainPage />);
    expect(screen.getByText(/Error fetching data/i)).toBeInTheDocument();
});

test("renders Stock Monitoring Dashboard", () => {
    useStocks.mockReturnValue({ stocks: [], loading: false, error: null });
    render(<MainPage />);
    expect(screen.getByText(/Stock Monitoring Dashboard/i)).toBeInTheDocument();
});
