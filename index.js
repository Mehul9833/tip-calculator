const tipRange = document.querySelector("#tip-percent");
const billAmount = document.querySelector("#bill-amount");
const tipAmount = document.querySelector("#tip-amount");
const allAmount = document.querySelector("#all-amount");
const tipPercentageRange = document.querySelector("#rangeValue");

let tipPercentage = 10;
let totalAmount = "";
let amount = "";

billAmount.addEventListener("change", (e) => {
	amount = parseInt(e.target.value);
	handleCalculation();
});

tipRange.addEventListener("change", (e) => {
	tipPercentage = e.target.value;
	tipPercentageRange.innerText = `${e.target.value}%`;
	if (amount !== "") handleCalculation();
});

function handleCalculation() {
	tipAmount.innerText = amount * (tipPercentage / 100);
	totalAmount = amount + amount * (tipPercentage / 100);

	allAmount.innerText = totalAmount;
}
