
const outputs:any= document.getElementById("display")as HTMLInputElement;
function appendToDisplay(num:string):void {
    if (outputs) {
        outputs.value += num;
    }
}
function calculate():void {
    if (outputs){
    try{
        outputs.value = eval(outputs.value);
    } catch (error) {
        alert("Invalid input");
    }
    }
}
function clearDisplay():void {
    if (outputs) {
        outputs.value = "";
    }
}

// Expose functions to the global scope
(window as any).appendToDisplay = appendToDisplay;
(window as any).calculate = calculate;
(window as any).clearDisplay = clearDisplay;
