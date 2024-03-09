// Login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});

// Deposit button event handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  if (isNaN(depositNumber)) {
    alert("Please enter a valid number for the deposit amount.");
    return;
  }

  updateBalance("currentDeposit", depositNumber);
  updateBalance("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

// Withdraw button event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(withdrawAmount);

  if (isNaN(withdrawNumber)) {
    alert("Please enter a valid number for the withdrawal amount.");
    return;
  }

  updateBalance("currentWithdraw", withdrawNumber);
  updateBalance("currentBalance", -withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

// Function to update balance

function updateBalance(id, amount) {
  const currentNumber = parseFloat(document.getElementById(id).innerText);
  const totalAmount = currentNumber + amount;
  document.getElementById(id).innerText = totalAmount.toFixed(2);
}
