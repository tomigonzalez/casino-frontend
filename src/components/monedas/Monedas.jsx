import { ContenedorMonedas, Input, StyledIcon } from "./MonedaStyle";
import MonedaSelect from "./MonedaOption";
import useMonedas from "../../hooks/useMonedas";
import { useSelector } from "react-redux";

const Monedas = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const {
    handleCurrencyChange,
    exchangeRate,
    fixedNumber = currentUser?.usuario.balance || 0,
    selectedCurrency,
  } = useMonedas();

  console.log(exchangeRate);

  return (
    <ContenedorMonedas>
      <StyledIcon />
      <MonedaSelect handleCurrencyChange={handleCurrencyChange} />
      <Input
        type="number"
        value={
          selectedCurrency === "USD"
            ? fixedNumber
            : (fixedNumber * exchangeRate).toFixed(2)
        }
        readOnly
      />
    </ContenedorMonedas>
  );
};

export default Monedas;
