var fx = require("money");

fx.base = "BRL";
fx.rates = {
  "BRL" : 1,
  "CAD" : 0.25,
  "HKD" : 1.46,
  "PHP" : 9.24 ,
  "DKK" : 1.19,
  "HUF" : 55.5,
  "CZK" : 4.19,
  "AUD" : 0.26,
  "RON" : 0.77,
  "SEK" : 1.65,
  "IDR" : 2.76,
  "INR" : 14.1,
  "RUB" : 13.87,
  "HRK" : 1.19,
  "JPY" : 19.97,
  "THB" : 5.86,
  "CHF" : 0.17,
  "SGD" : 0.25,
  "PLN" : 0.70,
  "BGN" : 0.31,
  "TRY" : 1.30,
  "CNY" : 1.31,
  "NZD" : 0.28,
  "ZAR" : 3.27,
  "USD" : 0.187,
  "MXN" : 4.29,
  "ILS" : 0.64,
  "GBP" : 0.14,
  "EUR" : 0.16,
}

const convertValue = (value, fromCurrency, toConvertCurrency) => {
    const converted = fx.convert(value, {from: fromCurrency, to: toConvertCurrency});
    const formatted = new Intl.NumberFormat('en-US', { minimumSignificantDigits: 2, maximumSignificantDigits: 2 }).format(converted);
    return formatted ? formatted : '0';
};

export default convertValue;
