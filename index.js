// Console log a welcome message with instructions to mad libs
console.log("Welcome To MidLibs! You will be playing a game by inputting words to see the words you inputted into a story. Have fun:)!")
// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me a adjective")
let noun = prompt("Give me a noun")
let verb = prompt("Give me a verb")
let pluralNoun = prompt("Give me a pluralNoun")


// Create an array that stores the values the user entered
let words = []
words.push(adjective)
words.push(noun)
words.push(verb)
words.push(pluralNoun)

// Console log the story with the array values passed into the blanks
console.log(`In a small ${words[0]} school in the Bronx, there was a proble with too many ${words[1]} these ${words[1]} loved to ${words[2]} , which caused Mr.P so many headaches.However, no one wanted to remove them because they were too ${words[3]} so they stayed there forever.`)

// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive









