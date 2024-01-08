console.log("CONNECTED");
let operator = "";
let oldValue = document.getElementById("history");
let output = document.getElementById("mainOutput");
function operators() {
    if (isNaN(parseFloat(output.innerHTML)) || isNaN(parseFloat(oldValue.innerHTML))) {
        output.innerHTML = 0;
    } else {
        if (operator === "+") {
            output.innerHTML = parseFloat(oldValue.innerHTML) + parseFloat(output.innerHTML);
        } else if (operator === "-") {
            output.innerHTML = parseFloat(oldValue.innerHTML) - parseFloat(output.innerHTML);
        } else if (operator === "/") {
            output.innerHTML = parseFloat(oldValue.innerHTML) / parseFloat(output.innerHTML);
        } else if (operator === "*") {
            output.innerHTML = parseFloat(oldValue.innerHTML) * parseFloat(output.innerHTML);
        }
    }
}
let obicenVar = document.querySelectorAll("button").forEach(function (btn) {
    btn.onclick = function () {
        if (btn.value === " ") {
            output.innerHTML = 0;
            oldValue.innerHTML = btn.value;
        } else if (btn.value === "strelka") {
            if (output.innerHTML === "0") {
                output.innerHTML = 0;
            } else {
                output.innerHTML = output.innerHTML.slice(0, -1);
            }
        } else if (btn.value === "+" || btn.value === "/" || btn.value === "*"
            || btn.value === "-") {
            oldValue.innerHTML = output.innerHTML += btn.value;
            operator = btn.value;
            output.innerHTML = " ";
        } else if (btn.value === "=") {
                operators();
                oldValue.innerHTML = " ";
        }
        else {
            output.innerHTML += btn.value;
        }
    }
})
