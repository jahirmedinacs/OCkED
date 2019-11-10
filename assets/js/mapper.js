console.log("Mapper Loaded");

let LAYOUT;

function loadLayout(JSONData) {
    LAYOUT = JSON.parse(JSONData);
    if (LAYOUT.status) {
        console.log("Layout Successfully Loaded");
    }
    else{
        console.log("Layout JSON file corrupted");
    }

    let selectReference = document.querySelector("#Select");

    let layoutKeys =  Object.keys(LAYOUT);
    let tempText = "";
    for (let ii = 0; ii < (layoutKeys.length - 1); ii ++){
        tempText += "<option value='" + layoutKeys[ii] + "'>";
        tempText += layoutKeys[ii] + "</option>/n";
    }
    selectReference.innerHTML = tempText;
}

// JSON LOADER
function loadJSON(callback, JSONUrl) {
    let xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    xObj.open('GET', JSONUrl, true);
    xObj.onreadystatechange = function () {
        if (xObj.readyState === 4 && xObj.status === 200) {
            callback(xObj.responseText);
        }
    };
    xObj.send(null);
}