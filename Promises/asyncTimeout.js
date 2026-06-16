function asyncTimeout(fn, delay) {
  return async function(...args) {
    let func = fn(...args);
    let timeout = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Error: timeout exceeded"), delay));
    })

    return Promise.race([func, timeout]);
  }
}

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const slowFn = async (n) => {
  await sleep(1000);
  return n * 2;
};

const fastFn = asyncTimeout(slowFn, 500);

try {
  const res = await fastFn(5);
  console.log("Result:", res);
} catch (err) {
  console.error(err.message); // Output: Timeout of 500ms exceeded
}

// v2

function asyncTimeout(fn, delay) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout exceeded')), delay);
      })
    ])
  }
}
