function sleep (ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("\nEnd: ", Date.now());
            res();
        }, ms);
    })
}

console.log("\nStart: ", Date.now());

sleep(2000);
