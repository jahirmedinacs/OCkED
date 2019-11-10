console.log("Encoder Loaded");

function encode() {
    let mode = document.querySelector("#Select").value;
    let currentLayout = LAYOUT[mode];
    let inputData = document.querySelector("#Encode").value;

    let outputData = "";
    for (let ii = 0; ii < inputData.length; ii++) {
        let currentChar = inputData.charAt(ii);

        outputData += "·";

        if (currentChar === " "){
            outputData += "0";
        }
        else{
            if (currentChar === currentChar.toUpperCase()){
                outputData += "#";
                outputData += currentLayout[currentChar.toLowerCase()]
            }
            else{
                outputData += currentLayout[currentChar]
            }
        }
    }
    document.querySelector("#Decode").value = outputData;
}