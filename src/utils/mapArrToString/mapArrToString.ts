export const mapArrToStrings = (arr: Array<number>) => {
  return arr.filter((item) => Number.isInteger(item)).map(String);
};
