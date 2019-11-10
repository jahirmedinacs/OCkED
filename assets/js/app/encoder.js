console.log("Encoder Loaded");

function encode() {
    let mode = document.querySelector("#Select").value;
    let currentLayout = LAYOUT[mode].encode;
    let inputData = document.querySelector("#Encode").value;

    let outputData = "";
    for (let ii = 0; ii < inputData.length; ii++) {
        let currentChar = inputData.charAt(ii);

        outputData += "·";
        let carry = "";
        if (currentChar === " "){
            carry += "0";
        }
        else{
            if (currentChar === currentChar.toUpperCase()){
                carry += "#";
            }
            if (currentLayout.hasOwnProperty(currentChar.toLowerCase())){
                carry += currentLayout[currentChar.toLowerCase()];
            }
            else{
                carry = undefined;
            }

        }

        if (carry !== undefined){
            outputData += carry;
        }
    }
    document.querySelector("#Decode").value = outputData;
}