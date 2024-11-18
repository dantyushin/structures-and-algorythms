const cash = (fn: (arg0: any) => any) => {
  const cash: { [key: string]: any } = {};
  return function (n: string | number) {
    if (cash[n]) {
      console.log("cash");
      return cash[n];
    }
    let result = fn(n);
    console.log("calc");
    cash[n] = result;
    return result;
  };
};

const factorial = (n: number) => {
  let result = 1;
  while (n !== 1) {
    result *= n;
    n -= 1;
  }
  return result;
};

const cashFactorial = cash(factorial);

console.log(cashFactorial(5));
console.log(cashFactorial(5));
console.log(cashFactorial(4));
console.log(cashFactorial(4));
