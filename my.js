const expense = document.querySelector("#expense");
const amount = document.querySelector("#amount");
const button = document.querySelector("#btn");
const container = document.querySelector(".container");
const totalElement = document.querySelector("#para");

button.addEventListener("click", () => {
  if (expense.value === "" || amount.value === "" || Number(amount.value) <= 0) {
        alert("Please Fill The Requird Information");
        return;
    }
    const expenseData = {
        name: expense.value,
        amount: amount.value
    };
        
    expenses.push(expenseData);
    renderExpenses();
    expense.value = "";
    amount.value = "";

})

let expenses = [];

function renderExpenses() {
    container.innerHTML = "";
    let total = 0;
    expenses.forEach((item) => {
        const expenseItem = document.createElement("div");
        expenseItem.textContent = `${item.name} - Rs. ${item.amount}`;
        total = total + Number(item.amount);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", () => {
            expenses = expenses.filter((expenseItem) => {
                return expenseItem !== item;
            });
            renderExpenses();
        });
        expenseItem.appendChild(deleteBtn);
        container.appendChild(expenseItem);

    });

    totalElement.textContent = `Total: Rs. ${total}`;
}
