console.log(1);

setTimeout(() => console.log(2));

new Promise(res => {
  console.log(5);
  res();
}).then(() => console.log(4));

console.log(3);

/*
1
5
3
4
2
*/