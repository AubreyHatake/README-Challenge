const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: "input",
        name: "projectName",
        message: "What's the name of your project?"
    }, 
    {
        type: "input",
        name: "repoName",
        message: "What is the name of your Github repo?"
    }, 
    {
        type: "input",
        name: "userName",
        message: "What is your Github username?"
    }

])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    console.log("Hello World!")
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
