// Slot Machine app

// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings or take their bet if they lost
// 7. Play again or handle situation if the user has no money left


const prompt = require("prompt-sync")();

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

const depositAmount = deposit();
console.log(depositAmount);