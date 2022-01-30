function numberOne(a) {
  return function numberTwo(b) {
    console.log(a + b);
  };
}
numberOne(1)(2);
