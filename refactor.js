function mathRandomNumber(param, num) {
  const randomNumber = Math.round(Math.random() * 100);
  const maths = {
    Sum() {
      return randomNumber  + num;
    },
    Subtract() {
      return randomNumber - num;
    },
    Multiply() {
      return randomNumber * num;
    },
    Divide() {
      return randomNumber / num;
    }
  }
  return `Seu número é ${maths[param]()}!`;
}
