const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const prices = document.querySelectorAll(".price");
	let total =0;

	prices.forEach((price) => {
		total += Number(price.textContent);
	});

	const row = document.createElement("tr");
	const cell = document.createElement("td");

	cell.colspan = 2;
	cell.textContent =`Total Price: Rs ${total}`;

	row.appendChild(cell);

	document.querySelector("table").appendChild(row);
};
getSumBtn.addEventListener("click", getSum);

