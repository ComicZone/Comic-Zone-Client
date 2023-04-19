export const converDollarToNaira = (dollarAmount) => {
  if (dollarAmount) {
    return Number(Math.ceil(dollarAmount)) * 740;
  } else {
    console.log("error", typeof dollarAmount);
    return;
  }

};
