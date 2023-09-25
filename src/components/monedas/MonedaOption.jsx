import React from "react";
import { Select } from "./MonedaStyle";

const MonedaSelect = ({ selectedCurrency, handleCurrencyChange }) => {
  return (
    <Select value={selectedCurrency} onChange={handleCurrencyChange}>
      <option value="USD">USD $</option>
      <option value="ARS">ARS $</option>
      <option value="EUR">EUR $</option>
      <option value="GBP">GBP $</option>
    </Select>
  );
};
export default MonedaSelect;
