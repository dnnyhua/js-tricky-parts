function createAccount(pin, initialAmount = 0) {
    let account = {
        checkBalance(inputPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            return `$${initialAmount}`;
        },
        deposit(inputPin, depositAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            initialAmount += depositAmount;
            return `Succesfully deposited $${depositAmount}. Current balance: $${initialAmount}.`;
        },
        withdraw(inputPin, withdrawalAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            if (withdrawalAmount > initialAmount)
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            initialAmount -= withdrawalAmount;
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${initialAmount}.`;
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    };

    return account;
}

module.exports = { createAccount };





