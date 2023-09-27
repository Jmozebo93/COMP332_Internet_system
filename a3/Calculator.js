
// Define an array to store operation details
var operations = [];

var minResult = Number.POSITIVE_INFINITY; // Initialize to positive infinity
var maxResult = Number.NEGATIVE_INFINITY; // Initialize to negative infinity
var totalResult = 0;
var operationCount = 0;

// Function to add a new row to the table
function addTableRow(num1, operator, num2, result) {
    var table = document.getElementById("operation-table");
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = num1;
    cell2.innerHTML = operator;
    cell3.innerHTML = num2;
    cell4.innerHTML = result;
}

function calculate() {
    while (true) {
        var num1 = prompt("Value of x:");


        var operator = prompt("Enter an operator (+, -, %, /, *):");


        var num2 = prompt("Value y:");

        var result;
        if(isNaN(Number(num1)) || isNaN(Number(num2))){
            result = "Wrong input number"
        }
        else if (operator === '+') {
            result = Number(num1) + Number(num2);
        } else if (operator === '-') {
            result = Number(num1) - Number(num2);
        } else if (operator === '%') {
            result = Number(num1) % Number(num2);
        } else if (operator === '/') {
            if (Number(num2) === 0) {
                alert("Division by zero is not allowed.");
                continue;
            }
            result = Number(num1) / Number(num2);
        } else if (operator === '*') {
            result = Number(num1) * Number(num2);
        }
        else {
            result = "Computation error"
        }


        // Push operation details into the array
        operations.push({ num1, operator, num2, result });

        if(!(isNaN(result))){
            // Update minimum, maximum, total, and count
            minResult = Math.min(minResult, result);
            maxResult = Math.max(maxResult, result);
            totalResult += result;
            operationCount++;

        }


        // Add a new row to the table for the current operation
        addTableRow(num1, operator, num2, result);

        var continueCalculation = confirm("Do you want to continue?");
        if (!continueCalculation) {
            break;
        }
    }

    // Calculate average
    var averageResult = totalResult / operationCount;

    // Display the calculated results in the statistics table
    document.getElementById("min-result").textContent = minResult;
    document.getElementById("max-result").textContent = maxResult;
    document.getElementById("average-result").textContent = averageResult;
    document.getElementById("total-result").textContent = totalResult;
}

// Call the calculator function when the page loads
window.onload = function() {
    calculate();
};
