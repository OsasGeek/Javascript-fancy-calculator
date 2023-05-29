let output = document.getElementById("output")
let logic = document.getElementById("logic")


function numberOne() {
    let logicOperator = 1
    logic.value += logicOperator
}
function numberTwo() {
    let logicOperator = 2
    logic.value += logicOperator
}
function numberThree() {
    let logicOperator = 3
    logic.value += logicOperator
}
function numberFour() {
    let logicOperator = 4
    logic.value += logicOperator
}
function numberFive() {
    let logicOperator = 5
    logic.value += logicOperator
}
function numberSix() {
    let logicOperator = 6
    logic.value += logicOperator
}
function numberSeven() {
    let logicOperator = 7
    logic.value += logicOperator
}
function Eight() {
    let logicOperator = 8
    logic.value += logicOperator
}
function numberNine() {
    let logicOperator = 9
    logic.value += logicOperator
}
function numberZero() {
    let logicOperator = 0
    logic.value += logicOperator
}
function numberCurll() {
    let logicOperator = "*("
    logic.value += logicOperator
}
function numberCurlr() {
    let logicOperator = ")"
    logic.value += logicOperator
}
// Operators and logic below
function plus() {
    if (logic.value.length < 1) {
        let logicOperator = "0+"
        logic.value += logicOperator
    } 
    if (!logic.value.endsWith("+")&&!logic.value.endsWith("*")&&!logic.value.endsWith("/")) {
        let logicOperator = "+"
        logic.value += logicOperator
    }
        
}

function minus() {
    if (logic.value.length < 1) {
        let logicOperator = "0-"
        logic.value += logicOperator
    } 
    if (!logic.value.endsWith("-")&&!logic.value.endsWith("*")&&!logic.value.endsWith("/")) {
        let logicOperator = "-"
        logic.value += logicOperator
    }
        
}

function multiply() {
    if (logic.value.length < 1) {
        let logicOperator = "0*"
        logic.value += logicOperator
    } 
    if (!logic.value.endsWith("*")&&!logic.value.endsWith("+")&&!logic.value.endsWith("/")&&!logic.value.endsWith("-")&&!logic.value.endsWith("(")) {
        let logicOperator = "*"
        logic.value += logicOperator
    }
        
}

function divide() {
    if (logic.value.length < 1) {
        let logicOperator = "0/"
        logic.value += logicOperator
    } 
    if (!logic.value.endsWith("/")&&!logic.value.endsWith("+")&&!logic.value.endsWith("*")&&!logic.value.endsWith("-")&&!logic.value.endsWith("(")) {
        let logicOperator = "/"
        logic.value += logicOperator
    }
        
}
function ac() {
    logic.value = ""
    output.textContent = 0  
}
function displayResult() {   
    if (logic.value === "") {
        let logicOperator = "0"
        logic.value += logicOperator
        output.textContent = eval(logic.value)
        logic.value = ""
     } 
     else{
        output.textContent = eval(logic.value)
        logic.value = ""   
     }

}

function deleteCha() {
    let str = logic.value
    str = str.slice(0, -1); 
    logic.value = str
}
