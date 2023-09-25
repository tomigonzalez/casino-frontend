import axios from "axios";
import { useEffect, useState } from "react";

const useMonedas = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [fixedNumber, setFixedNumber] = useState();

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/14606b5ff1ee3c941b30f52e/latest/USD`
        );
        if (response.data && response.data.conversion_rates) {
          const rate = response.data.conversion_rates[selectedCurrency];
          if (rate) {
            setExchangeRate(rate);
          } else {
            console.error(
              `No se encontró una tasa de cambio para ${selectedCurrency}`
            );
          }
        } else {
          console.error(
            "La respuesta de la API no incluye los datos esperados."
          );
        }
      } catch (error) {
        console.error(
          `Ocurrió un error al obtener la tasa de cambio: ${error.message}`
        );
      }
    };
    getExchangeRate();
  }, [selectedCurrency]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleInputChange = (event) => {
    const inputValue = parseFloat(event.target.value);
    setFixedNumber(inputValue);
  };

  return {
    handleCurrencyChange,
    handleInputChange,
    exchangeRate,
    fixedNumber,
    selectedCurrency,
  };
};

export default useMonedas;
