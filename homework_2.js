function numberChek(num) {
  let res = true;
  if (num > 1 && num <= 1000) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
        res = false;
      }
    }
    if (res === true) {
      console.log("Число простое");
    } else {
      console.log("Число составное");
    }
  } else {
    console.log("Данные неверны");
  }
}
numberChek();
