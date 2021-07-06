var result = BigInt(76);

let sleep = async (ms) => {
    return new Promise(r => setTimeout(r, ms));
} 

let main = async () => {
    while (true) {
        await sleep(1000);
        console.log(String(result));
        result = result * BigInt(76);
    }
}

main();

