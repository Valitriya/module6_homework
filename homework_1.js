let arr = [0, 1, 4, 8, undefined, 0, null, false, true, 0, NaN];

function dataTypeCount(arr) {

  let arrEven = [];
  let arrOdd = [];
  let arrAnothers = [];
  let arrZero = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
      if (arr[i] == 0) {
        arrZero += arr[i];
      } else if (arr[i] % 2 == 0) {
        arrEven += arr[i];
      } else if (arr[i] % 2 !== 0) {
        arrOdd += arr[i];
      }
    } else if (
      arr[i] == undefined ||
      arr[i] == null ||
      typeof arr[i] == "boolean" ||
      isNaN(arr[i]) == true
    ) {
      arrAnothers += 1;
    }
  }
  console.log(arrZero.length);
  console.log(arrEven.length);
  console.log(arrOdd.length);
  console.log(arrAnothers.length);
}
dataTypeCount(arr);
