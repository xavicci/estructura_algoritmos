function lineal_complex(list_order) {
  let sum = 0;
  let mult = 1;

  for (let num = 0; num < list_order.length; num++) {
    sum += num;
  }

  for (let num = 0; num < list_order.length; num++) {
    mult *= num;
  }

  return {
    sum,
    mult,
  };
}

list_order = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = lineal_complex(list_order);
// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////

function lineal_complex2(list_order) {
  let calc = 0;
  for (let i = 0; i < list_order.length; i++) {
    for (let j = 1; j < 5; j++) {
      calc += i * j;
    }
  }

  return calc;
}

const result2 = lineal_complex2(list_order);
console.log(result2);
