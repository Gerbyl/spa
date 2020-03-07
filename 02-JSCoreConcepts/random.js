const RandomInt = (min, max) => Math.floor(Math.random()*(max - min + 1) + min );

const crArr = (n, min, max) => {
  let arr = new Array(n)
  for (let i = 0; i < n; i++){
  arr[i] = RandomInt(min, max);
  }
  return arr;
}

console.log(crArr(10, 5, 20));
