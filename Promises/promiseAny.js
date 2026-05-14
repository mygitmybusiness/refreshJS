function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        let result = new Error("Empty array");
        let errorsCount = 0;

        if (promises.length == 0) return result;

        promises.forEach((elem, _) => {
            Promise.resolve(elem).then((res) => {
                resolve(res);
            }).catch((err) => {
                errorsCount++;

                if (errorsCount == promises.length) reject(err);
            });
        })
    });
}

const result = await promiseAny([
    Promise.reject('error1'),
    Promise.resolve('success!'),
    Promise.reject('error2')
]);

console.log(result);
// result = 'success!'