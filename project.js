// Slot Machine app

// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings or take their bet if they lost
// 7. Play again or handle situation if the user has no money left


const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;     // Each column represents a reel

const SYMBOLS_COUNT = {     // This object represents each of the symbols that you can possibly have in each reel (column) and how many of each of them there are
    A: 2,
    B: 4,
    C: 6,
    D: 8,
}

const SYMBOL_VALUES = {     // This object is the multiplier or the value of each symbol relative to what it's going to be multiplied by
    A: 5,
    B: 4,
    C: 3,
    D: 2,
}


const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, please try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, please try again.");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, please try again.");
        } else {
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

const reels = spin();
console.log(reels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);



