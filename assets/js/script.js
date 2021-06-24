// Luxon date and time variables
var DateTime = luxon.DateTime;
var now = DateTime.now();

// Get the date paragraph DOM element in the header
var date = document.getElementById("date");

// Display the current date and time
date.textContent = now.toLocaleString(DateTime.DATETIME_MED);

// Getting the DOM elements for the text and save columns
var textColumn9 = document.getElementById("9-second-column");
var saveButton9 = document.getElementById("9-save-button");
var textColumn10 = document.getElementById("10-second-column");
var saveButton10 = document.getElementById("10-save-button");
var textColumn11 = document.getElementById("11-second-column");
var saveButton11 = document.getElementById("11-save-button");
var textColumn12 = document.getElementById("12-second-column");
var saveButton12 = document.getElementById("12-save-button");
var textColumn1 = document.getElementById("1-second-column");
var saveButton1 = document.getElementById("1-save-button");
var textColumn2 = document.getElementById("2-second-column");
var saveButton2 = document.getElementById("2-save-button");
var textColumn3 = document.getElementById("3-second-column");
var saveButton3 = document.getElementById("3-save-button");
var textColumn4 = document.getElementById("4-second-column");
var saveButton4 = document.getElementById("4-save-button");
var textColumn5 = document.getElementById("5-second-column");
var saveButton5 = document.getElementById("5-save-button");
var saved = document.getElementById("saved")

var savedText = [
    {block: 9, text: ''},
    {block: 10, text: ''},
    {block: 11, text: ''},
    {block: 12, text: ''},
    {block: 1, text: ''},
    {block: 2, text: ''},
    {block: 3, text: ''},
    {block: 4, text: ''},
    {block: 5, text: ''}
];

// Checks whether or not the time block color needs to be changed and changes it if it needs to be changed
function blockColor() {

}

// Save the text content of a time block after it is edited
function saveBlockText(saveButton) {
    if (saveButton === saveButton9) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 9) {
                savedText[i].text = textColumn9.textContent;
            }
        }
    }

    if (saveButton === saveButton10) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 10) {
                savedText[i].text = textColumn10.textContent;
            }
        }
    }

    if (saveButton === saveButton11) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 11) {
                savedText[i].text = textColumn11.textContent;
            }
        }
    }

    if (saveButton === saveButton12) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 12) {
                savedText[i].text = textColumn12.textContent;
            }
        }
    }

    if (saveButton === saveButton1) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 1) {
                savedText[i].text = textColumn1.textContent;
            }
        }
    }

    if (saveButton === saveButton2) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 2) {
                savedText[i].text = textColumn2.textContent;
            }
        }
    }

    if (saveButton === saveButton3) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 3) {
                savedText[i].text = textColumn3.textContent;
            }
        }
    }

    if (saveButton === saveButton4) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 4) {
                savedText[i].text = textColumn4.textContent;
            }
        }
    }

    if (saveButton === saveButton5) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 5) {
                savedText[i].text = textColumn5.textContent;
            }
        }
    }

    localStorage.setItem("savedText", JSON.stringify(savedText));
    saved.textContent = "Last saved: " + date.textContent;

}

// Load saved time block content
function load() {
    
}

saveButton9.addEventListener('click', function() {saveBlockText(saveButton9)});
saveButton10.addEventListener('click', function() {saveBlockText(saveButton10)});
saveButton11.addEventListener('click', function() {saveBlockText(saveButton11)});
saveButton12.addEventListener('click', function() {saveBlockText(saveButton12)});
saveButton1.addEventListener('click', function() {saveBlockText(saveButton1)});
saveButton2.addEventListener('click', function() {saveBlockText(saveButton2)});
saveButton3.addEventListener('click', function() {saveBlockText(saveButton3)});
saveButton4.addEventListener('click', function() {saveBlockText(saveButton4)});
saveButton5.addEventListener('click', function() {saveBlockText(saveButton5)});

load();