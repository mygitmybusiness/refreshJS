function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) {
      resolve([]);
    }

    let results = Array.from({ length: promises.length });
    let counter = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          results[index] = data;
          counter--;

          if (counter == 0) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

const check = async () => {
    const promises = await promiseAll([
        Promise.resolve(1),
        new Promise((res, rej) => setTimeout(() => res("SLOW"), 2000)),
        Promise.resolve(3),
        Promise.resolve(4),
    ]);

    console.log(promises);
}

check();

