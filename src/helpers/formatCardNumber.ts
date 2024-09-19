export const formatCardNumber = (cardNumber) => {
  return cardNumber.replace(/(\d{4})(?=\d)/g, "$1-");
};
