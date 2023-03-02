function Fibonacci(number) {
  let value1 = 0, value2 = 1, currentValue = 0;

  while (currentValue <= number) {
    if (currentValue == number) {
      return true;
    }
    currentValue = value1 + value2;
    value1 = value2;
    value2 = currentValue;
  }

  return false;
}

// Número para verificar
const number = 34;

if(Fibonacci(number)) {
  console.log("O número pertence a sequência de Fibonacci");
} else {
  console.log("O número NÃO pertence a sequência de Fibonacci");
}