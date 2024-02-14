export const formatNumber = (digit: number) => {
  return new Intl.NumberFormat("th-TH").format(digit);
};
