var result = BigInt(76);

const sleep = async (ms) => {
    return new Promise(r => setTimeout(r, ms));
} 

const main = async () => {
    while (true) {
        console.log(String(result));
        result = result * BigInt(76);
        await sleep(1000);
    }
}

main();

