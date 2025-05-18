let resultEle = document.querySelector("#result");
let btnClear = document.querySelector("#btn-clear");
let btnMemory = document.querySelector("#btn-memory");
let btnParse = document.querySelector("#btn-per");
let btnAll = document.querySelectorAll(".btn");
let btnTotal = document.querySelector(".total");

// Button spread shortcut to access all buttons
let btnAllSpread = [...btnAll];

let isNewCalculation = false; // Flag to check if new input should replace result

btnAllSpread.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;

        if (value === btnMemory.innerText) {
            resultEle.innerHTML = "0"; // Reset memory
            isNewCalculation = false;
        } 
        else if (value === btnClear.innerText) {
            resultEle.innerHTML = ""; // Clear the display
            isNewCalculation = false;
        } 
        else if (value === btnParse.innerText) {
            resultEle.innerHTML = parseFloat(resultEle.innerHTML) / 100; // Percentage conversion
        } 
        else if (value === "=") {
            try {
                resultEle.innerHTML = eval(resultEle.innerHTML); // Evaluate expression
                isNewCalculation = true; // Set flag to reset display on next number input
            } catch {
                resultEle.innerHTML = "Error";
            }
        } 
        else {
            // If a new calculation started, replace the display instead of appending
            if (isNewCalculation) {
                resultEle.innerHTML = value; 
                isNewCalculation = false; // Reset flag
            } else {
                // Prevent leading zero issue
                if (resultEle.innerHTML === "0") {
                    resultEle.innerHTML = value;
                } else {
                    resultEle.innerHTML += value; // Append numbers and operators
                }
            }
        }
    });
});
