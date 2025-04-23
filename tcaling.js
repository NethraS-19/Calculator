var outputs = document.getElementById("display");
function appendToDisplay(num) {
    if (outputs) {
        outputs.value += num;
    }
}
function calculate() {
    if (outputs) {
        try {
            outputs.value = eval(outputs.value);
        }
        catch (error) {
            alert("Invalid input");
        }
    }
}
function clearDisplay() {
    if (outputs) {
        outputs.value = "";
    }
}
// Expose functions to the global scope
window.appendToDisplay = appendToDisplay;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
