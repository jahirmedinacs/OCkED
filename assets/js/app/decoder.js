console.log("Decoder Loaded");

function decode() {
    let mode = document.querySelector("#Select").value;
    let currentLayout = LAYOUT[mode].decode;

    let inputData = document.querySelector("#Decode").value;
    let separator = document.querySelector("#Separator").value;
    inputData = inputData.split(separator);

    let outputData = "";
    for (let ii = 0; ii < inputData.length; ii++) {
        let currentStr = inputData[ii];
        let carry = "";

        if (currentStr === "0"){
            carry = " ";
        }
        else{
            if (currentStr[0] === "#"){
                carry = currentLayout[currentStr.slice(1)].toUpperCase();
            }
            else{
                carry = currentLayout[currentStr];
            }
        }

        if (carry !== undefined){
            outputData += carry;
        }
    }
    document.querySelector("#Encode").value = outputData;
}