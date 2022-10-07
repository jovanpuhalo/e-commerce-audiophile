export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  })
    .format(price)
    .replace(/^(\D+)/, "  $   ");
};
