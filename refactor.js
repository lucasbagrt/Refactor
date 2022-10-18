function mathRandomNumber(param, num) {
  const randomNumber = Math.random()
  const maths = {
    Sum() {
      return Math.round(randomNumber * 100) + num;
    },
    Subtract() {
      return Math.round(randomNumber * 100) - num;
    },
    Multiply() {
      return Math.round(randomNumber * 100) * num;
    },
    Divide() {
      return Math.round(randomNumber * 100) / num;
    }
  }
  return `Seu número é ${maths[param]()}!`;
}