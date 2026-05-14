async function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    let results = [];
    let counterReady = 0;

    if (promises.length == 0) {
      resolve([]);
    }

    promises.forEach((element, index) => {
      Promise.resolve(element)
        .then((res) => {
            results[index] = { status: 'fulfilled', value: res }
        })
        .catch((rej) => {
            results[index] = { status: 'rejected', reason: rej }
        })
        .finally(() => {
            counterReady++;

            if (counterReady == promises.length) resolve(results);
        });
    });
  });
}

const results = await promiseAllSettled([
  Promise.resolve(1),
  Promise.reject("error"),
  Promise.resolve(3),
]);

console.dir(results);
