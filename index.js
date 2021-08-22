
function changeBackground(bgColor) {
    document.body.style.background = bgColor;
}

function changeBackgroundFreeType() {
    var freeTypeColor = document.getElementById("freeTypeColor").value;
    changeBackground(freeTypeColor);
}

function convertFunction() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var num1 = document.getElementById("num1").value;
    var result;
    if (from == "cel") {
        if (to == "cel") {
            result = num1;
        }
        if (to == "rea") {
            result = (4 / 5) * num1;
        }
        if (to == "far") {
            result = (9 / 5) * num1 + 32;
        }
    }
    if (from == "rea") {
        if (to == "rea") {
            result = num1;
        }
        if (to == "cel") {
            result = (5 / 4) * num1;
        }
        if (to == "far") {
            result = (9 / 4) * num1 + 32;
        }
    }

    if (from == "far") {

        if (to == "far") {
            result = num1;
        }
        if (to == "cel") {
            result = (5 / 9) * (num1 - 32);
        }
        if (to == "rea") {
            result = (4 / 9) * (num1 - 32);
        }
    }

    document.getElementById("result").value = result;
}
