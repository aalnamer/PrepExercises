function createAccount(pin, amount = 0) {
  let balance = amount;

  function checkBalance(enteredPin) {
    if (enteredPin === pin) {
      return `$${balance}`;
    }
    return "Invalid PIN.";
  }

  function deposit(enteredPin, depositAmount) {
    if (enteredPin === pin) {
      balance = balance + depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
    }
    return "Invalid PIN.";
  }

  function withdraw(enteredPin, withdrawAmount) {
    if (enteredPin === pin && withdrawAmount <= balance) {
      balance = balance - withdrawAmount;
      return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
    } else if (withdrawAmount > balance) {
      return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    }
    return "Invalid PIN.";
  }

  function changePin(enteredPin, newPin) {
    if (enteredPin === pin) {
      pin = newPin;
      return "PIN successfully changed!";
    }
    return "Invalid PIN.";
  }
  return {
    checkBalance,
    deposit,
    withdraw,
    changePin,
  };
}

let account = createAccount(1234, 100);

console.log(account.checkBalance(1234));

module.exports = { createAccount };
