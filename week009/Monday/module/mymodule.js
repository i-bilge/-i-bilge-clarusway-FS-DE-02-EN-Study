const add = (n1, n2, n3) => {
  return n1 + n2 + n3;
};

const inc = (amount) => {
  const counter = amount + 1;
  return counter;
};
const dec = (amount) => {
  const counter = amount - 1;
  return counter;
};

const WORKING_HOURS_WEEK = 50;

export { inc, dec, add, WORKING_HOURS_WEEK };
