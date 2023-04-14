export const converDollarToNaira = (dollarAmount) => {
  //using $1 = N740
  console.log('amount', dollarAmount)
  if (dollarAmount) {
    console.log("num", Number(dollarAmount));
    return Number(Math.ceil(dollarAmount)) * 740;
  } else {
    console.log("error", typeof dollarAmount);
    return;
  }

};
