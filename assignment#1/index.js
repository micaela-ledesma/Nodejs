const fs = require('fs');

fs.readFile('transactions.txt', 'utf-8', (error, data) => {
    if (error) {
        throw error;
    }
    let lines = data.split('\n');
    for (const line of lines) {

        let lastTwoChars = line.slice(-2);

        if (lastTwoChars !== 'OK') {
            console.log(line);
        }
    }
});

