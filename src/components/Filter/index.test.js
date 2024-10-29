// src/components/Filter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./index";

test("renders Filter component", () => {
    render(<Filter threshold={10} setThreshold={() => { }} />);
    expect(screen.getByLabelText(/Filter by % change:/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue("10")).toBeInTheDocument();
});

test("calls setThreshold on input change", () => {
    const setThreshold = jest.fn();
    render(<Filter threshold={10} setThreshold={setThreshold} />);
    fireEvent.change(screen.getByDisplayValue("10"), { target: { value: "20" } });
    expect(setThreshold).toHaveBeenCalledWith(20);
});
