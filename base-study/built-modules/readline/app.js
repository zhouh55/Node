const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
} )

rl.question('下一步走哪去？', content => {
    console.log(content);
    // rl.close();
    rl.question('第二步走哪去？', content => {
        console.log(content);
        rl.close();
    })
})

