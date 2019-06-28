const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qestion: ', (value) => {
    console.log(`You entered ${value}`);
    rl.close();
});
