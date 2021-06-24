// Luxon date and time variables
var DateTime = luxon.DateTime;
var now = DateTime.now();

// Get the date paragraph DOM element in the header
var date = document.getElementById("date");

// Display the current date and time
date.textContent = now.toLocaleString(DateTime.DATETIME_MED);

// Getting the DOM elements for the second columns' text and save buttons
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

// Intializing the array for saving the second columns' text
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
    // If the current time is 10:00 AM or beyond, change the 9:00 AM second column's color to red
    if (now.hour > 9) {
        textColumn9.classList.remove('second-column');
        textColumn9.classList.add('second-column-red');
    }

    // If the current time is 11:00 AM or beyond, change the 10:00 AM second column's color to red
    if (now.hour > 10) {
        textColumn10.classList.remove('second-column');
        textColumn10.classList.add('second-column-red');
    }

    // If the current time is 12:00 PM or beyond, change the 11:00 AM second column's color to red
    if (now.hour > 11) {
        textColumn11.classList.remove('second-column');
        textColumn11.classList.add('second-column-red');
    }

    // If the current time is 1:00 PM or beyond, change the 12:00 PM second column's color to red
    if (now.hour > 12) {
        textColumn12.classList.remove('second-column');
        textColumn12.classList.add('second-column-red');
    }

    // If the current time is 2:00 PM or beyond, change the 1:00 PM second column's color to red
    if (now.hour > 13) {
        textColumn1.classList.remove('second-column');
        textColumn1.classList.add('second-column-red');
    }

    // If the current time is 3:00 PM or beyond, change the 2:00 PM second column's color to red
    if (now.hour > 14) {
        textColumn2.classList.remove('second-column');
        textColumn2.classList.add('second-column-red');
    }

    // If the current time is 4:00 PM or beyond, change the 3:00 PM second column's color to red
    if (now.hour > 15) {
        textColumn3.classList.remove('second-column');
        textColumn3.classList.add('second-column-red');
    }

    // If the current time is 5:00 PM or beyond, change the 4:00 PM second column's color to red
    if (now.hour > 16) {
        textColumn4.classList.remove('second-column');
        textColumn4.classList.add('second-column-red');
    }

    // If the current time is 6:00 PM or beyond, change the 5:00 PM second column's color to red
    if (now.hour > 17) {
        textColumn5.classList.remove('second-column');
        textColumn5.classList.add('second-column-red');
    }
}

// Save the text content of a time block after it is edited
function saveBlockText(saveButton) {
    // If the 9:00 AM save button was clicked
    if (saveButton === saveButton9) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 9) {
                savedText[i].text = textColumn9.textContent;
            }
        }
    }

    // If the 10:00 AM save button was clicked
    if (saveButton === saveButton10) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 10) {
                savedText[i].text = textColumn10.textContent;
            }
        }
    }

    // If the 11:00 AM save button was clicked
    if (saveButton === saveButton11) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 11) {
                savedText[i].text = textColumn11.textContent;
            }
        }
    }

    // If the 12:00 PM save button was clicked
    if (saveButton === saveButton12) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 12) {
                savedText[i].text = textColumn12.textContent;
            }
        }
    }

    // If the 1:00 PM save button was clicked
    if (saveButton === saveButton1) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 1) {
                savedText[i].text = textColumn1.textContent;
            }
        }
    }

    // If the 2:00 PM save button was clicked
    if (saveButton === saveButton2) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 2) {
                savedText[i].text = textColumn2.textContent;
            }
        }
    }

    // If the 3:00 PM save button was clicked
    if (saveButton === saveButton3) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 3) {
                savedText[i].text = textColumn3.textContent;
            }
        }
    }

    // If the 4:00 PM save button was clicked
    if (saveButton === saveButton4) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 4) {
                savedText[i].text = textColumn4.textContent;
            }
        }
    }

    // If the 5:00 PM save button was clicked
    if (saveButton === saveButton5) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 5) {
                savedText[i].text = textColumn5.textContent;
            }
        }
    }

    // Saving the scheduler's content
    localStorage.setItem("savedText", JSON.stringify(savedText));

    // Displaying the date and time the scheduler's content was last saved
    saved.textContent = "Last saved: " + date.textContent;
}

// Load saved time block content
function load() {
    // Retrieving the scheduler's content from the broswer's cached data
    savedText = JSON.parse(localStorage.getItem("savedText"));

    // Going through the savedText array that was loaded above
    for (var i = 0; (savedText.length) && (i < savedText.length); i++) {
        // Load the second column's text content for the 9:00 AM slot
        if (savedText[i].block === 9) {
            textColumn9.textContent = savedText[i].text;
        }

        // Load the second column's text content for the 10:00 AM slot
        if (savedText[i].block === 10) {
            textColumn10.textContent = savedText[i].text;
        }

        // Load the second column's text content for the 11:00 AM slot
        if (savedText[i].block === 11) {
            textColumn11.textContent = savedText[i].text;
        }

        // Load the second column's text content for the 12:00 PM slot
        if (savedText[i].block === 12) {
            textColumn12.textContent = savedText[i].text;
        }
        
        // Load the second column's text content for the 1:00 PM slot
        if (savedText[i].block === 1) {
            textColumn1.textContent = savedText[i].text;
        }
        
        // Load the second column's text content for the 2:00 PM slot
        if (savedText[i].block === 2) {
            textColumn2.textContent = savedText[i].text;
        }
        
        // Load the second column's text content for the 3:00 PM slot
        if (savedText[i].block === 3) {
            textColumn3.textContent = savedText[i].text;
        }
        
        // Load the second column's text content for the 4:00 PM slot
        if (savedText[i].block === 4) {
            textColumn4.textContent = savedText[i].text;
        }

        // Load the second column's text content for the 5:00 PM slot
        if (savedText[i].block === 5) {
            textColumn5.textContent = savedText[i].text;
        }
    }
}

// Event listeners for the save buttons
saveButton9.addEventListener('click', function() {saveBlockText(saveButton9);});
saveButton10.addEventListener('click', function() {saveBlockText(saveButton10);});
saveButton11.addEventListener('click', function() {saveBlockText(saveButton11);});
saveButton12.addEventListener('click', function() {saveBlockText(saveButton12);});
saveButton1.addEventListener('click', function() {saveBlockText(saveButton1);});
saveButton2.addEventListener('click', function() {saveBlockText(saveButton2);});
saveButton3.addEventListener('click', function() {saveBlockText(saveButton3);});
saveButton4.addEventListener('click', function() {saveBlockText(saveButton4);});
saveButton5.addEventListener('click', function() {saveBlockText(saveButton5);});

// Loading the second columns' text content when the page is loaded
load();

// Executing the blockColor() function every second
setInterval(function() {blockColor();}, 1000);