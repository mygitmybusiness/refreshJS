function promiseRace(promises) {
  if (!promises.length) return Promise.reject("input array is empty");

  return new Promise((resolve, reject) => {
    promises.forEach((element) => {
      element.then((val) => resolve(val)).catch((err) => reject(err));
    });
  });
}

const result = await promiseRace([
  new Promise((res) => setTimeout(() => res("slow"), 4000)),
  new Promise((res) => setTimeout(() => res("fast"), 3000)),
  new Promise((res) => setTimeout(() => res("slowest"), 5000)),
]);

// result = 'fast'

console.log(result);

//v2

function promiseRace(promises) {
  if (promises.length == 0) return new Promise();

  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      Promise.resolve(p).then((data) => resolve(data)).catch((err) => reject(err));
    })
  })
}
