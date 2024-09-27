// Saves options to chrome.storage
function saveImageOptions() {
    var enableImageReplacement = document.getElementById('enableImageReplacement').checked;
    // retrieve the replacement percentage and convert it into a probability
    var imgReplaceProbability = document.getElementById('imgReplaceProb').value / 100;
    var imgIncrementValue = document.getElementById('incrementValue').value / 100;
    var imgIncrementInterveral = document.getElementById('incrementInterval').value;

    var imgLibOption = document.getElementById('imageLibrary').value;
    let imgLib = [];
    // if you're adding a new image library, make sure to add it to options.html as well so options.js can see it
    switch(imgLibOption){
        case "nCage":
            imgLib = ncageImages;
            break;
    }

    // the settings for the extension are stored as a json object
    chrome.storage.sync.set({
        settings: {
            imageReplacement: {
                "enableImgReplace": enableImageReplacement,
                "imgReplaceProb": imgReplaceProbability,
                "imgLibraryName": imgLibOption,
                "imgLibrary": imgLib,
                "incrementValue": imgIncrementValue,
                "incrementInterval": imgIncrementInterveral,
                "lastUpdate": new Date().getTime()
            }
        }
    }, function() {
        // display a message to let the user know that the options were saved
        var status = document.getElementById('ncStatus');
        status.textContent = 'Options saved!';
        setTimeout(function() {
            status.textContent = '';
        }, 3000);
    });
}

// Restores settings state using the preferences stored in chrome.storage.
function restoreOptions() {
    chrome.storage.sync.get(["settings"], function(data) {
        document.getElementById("enableImageReplacement").checked = data.settings.imageReplacement.enableImgReplace;
        document.getElementById("imageLibrary").value = data.settings.imageReplacement.imgLibraryName;
        replacementRate = data.settings.imageReplacement.imgReplaceProb;
        // round to 4 decimal places and drop the extra zeros at the end
        document.getElementById("imgReplaceProb").value = +(replacementRate * 100).toFixed(4);
        document.getElementById("incrementValue").value = data.settings.imageReplacement.incrementValue * 100;
        document.getElementById("incrementInterval").value = data.settings.imageReplacement.incrementInterval;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
// listen for when the save button in settings is clicked.
document.getElementById('saveImageOptions').addEventListener('click', saveImageOptions);


// Function to load and parse the XML file
function loadXML(callback) {
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/xml");
    xhr.open("GET", "assets/dirtywords.xml", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseXML);
        }
    };
    xhr.send(null);
}

// Function to get a random word from the XML
function getRandomWordFromXML(xml) {
    const words = xml.getElementsByTagName("Word");
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].textContent;
}

// Function to update the h1 element
function updateHeading() {
    loadXML(function (xml) {
        const randomWord = getRandomWordFromXML(xml);
        const heading = document.querySelector('h1');
        heading.textContent = `Szia te ${randomWord}`;
    });
}

// Call the function to update the heading
updateHeading();
