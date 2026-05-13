async function promiseAll(promises) {
    let results = Array.from({length: promises.length});

    promises.forEach((promise, index) => {
        Promise.resolve(promise).then((data) => {
            results[index] = data;
        }).catch((err) => {
            throw new Error(err);
        })
    })

    return results;
  }

  const results = await promiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    Promise.resolve(4)
  ]);

  console.log(results);