let numbers = [];

for (let i = -10; i <= 10; i++) {
  numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
    i--;
  }
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2;
}

for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j] + 1) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
console.log(numbers);
