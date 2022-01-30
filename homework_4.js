const intervalNum = setInterval(
  function (a, b) {
    for (let i = a; a <= b; a++) {
      console.log(a);
    }
  }, 1000, 5, 15);
setTimeout(function () {
  clearInterval(intervalNum);
}, 2000);
