
let currentInput = "";
let firstOperand = null;
let currentOperation = "";

function insertNumber (number) {

    currentInput += number
    document.getElementById("result").value = currentInput;

};



function setOperation (operation) {

    if (firstOperand === null) {

        firstOperand = parseFloat (currentInput);
        currentInput = "";
    }
    currentOperation = operation;

};

function clearResult () {

        currentInput = "";
        firstOperand = null;
        currentOperation = "";
        document.getElementById("result").value = "";
};


function calculateResult() {

    if (firstOperand !== null && currentInput !== "") {

        let secondOperand = parseFloat(currentInput);
        let result = 0;

        switch (currentOperation) {

            case "+":
                result = firstOperand + secondOperand;
                break;
    

            case "-":
                result = firstOperand - secondOperand;
                break;

            case "*":
                result = firstOperand * secondOperand;
                break;

            case "/":
                result = firstOperand / secondOperand;
                break;
        }


        document.getElementById("result").value = result;
        currentInput = result.toString();
        firstOperand = null;
        currentOperation = "";

    };


};
