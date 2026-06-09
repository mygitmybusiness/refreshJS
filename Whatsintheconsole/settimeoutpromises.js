setTimeout(() => console.log(a, b, c), 0);

 const promise = new Promise((resolve) => {
     a++;
     resolve();
 });

 const a = 1;

 promise
     .then(() => console.log(a))
     .catch(() => console.log(b--))
     .catch(() => console.log(0));

 let b = 2

 console.log(c);

 var c = 3

/*
undefined <- c
2
undefined
1
1
3
*/