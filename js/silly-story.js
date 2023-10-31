// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables
- customName for the name field
- randomize for the button
- story for the paragraph that outputs the final story
*/
let customName = document.querySelector("#customname");
let historyImperial = document.querySelector("#imperial");
let historyMetric = document.querySelector("#metric");
let outputLabel = document.querySelector(".story");
let finalButton = document.querySelector(".randomize");

/* STEP 3: Create the variable that contains the story string that will be modified 
- use var storyText to contain the following:
*/
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

/* STEP 4: Create three arrays, insertX, insertY, and insertZ, assigning them the following array values respectively:
Donald Trump, Jackie Chan, Santa Claus
Area 51, Death Valley, Aruba
spontaneously combusted, rapidly sublimated, evaporated instantly
*/  

var storyCharacters = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var storyPlace = ['Area 51', 'Death Valley', 'Aruba'];
var storyNouns = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

/* STEP 2: have a look at the following function - if you call this function and pass 
it an array, it will return one of the elements of that array randomly */

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: Review the partially complete result() function below */
function result() {
    // STEP 7: Create a new variable called newStory and 
    // set it to the value of storyText - we don't want to overwrite the original story!
    var newStory = storyText;

    /* STEP 8: Use the randomValueFromArray() function to generate a value for 
    each of three new variables - xItem, yItem, and zItem
    Call up the function and for each variable, pass it the array from 
    which to grab a random string - for example if insertW was an array of strings, I would type:
    var wItem = randomValueFromArray(insertW);*/
    var xItem = randomValueFromArray(storyCharacters);
    var yItem = randomValueFromArray(storyPlace);
    var zItem = randomValueFromArray(storyNouns);

    /* STEP 9: Replace the three placeholders in the newStory 
    string — :insertx:, :inserty:, and :insertz: — with the strings stored in 
    xItem, yItem, and zItem. Each time, be sure to update the variable newStory 
    (with =). You might need to do one of the above replacements twice! */
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    /* STEP 10: If the user has typed a name in the customName field, replace the name 'Bob' in the story with whatever they typed */
    var userData = customName.value;
    if (userData !== "") {
        newStory = newStory.replace('Bob', userData);
    }

    /* STEP 13: Make the textContent property of the outputLabel variable (which references the paragraph) equal to newStory */
    outputLabel.textContent = newStory;

    // The following line makes the paragraph visible
    outputLabel.style.visibility = "visible";
}

// EVENT LISTENERS
/* STEP 5: Add a click event listener to the finalButton variable 
so that when the button it represents is clicked, the result() function is run. */
finalButton.addEventListener("click", result);
