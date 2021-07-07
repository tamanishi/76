var result = BigInt(76);

const sleep = async (ms) => {
    return new Promise(r => setTimeout(r, ms));
} 

const main = async () => {
    while (true) {
        await sleep(1000);
        console.log(String(result));
        result = result * BigInt(76);
    }
}

main();

