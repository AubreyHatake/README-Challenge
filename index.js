// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

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
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }

]);

const genReadme = (data) => {
    return `
# READEME.md Generator

## my name is ${data.firstName} ${data.lastName}

### The name of my project is  ${data.repoName}

### The type of licensing I will be using for thie project is ${data.license}
    `
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success!")
    });
}




// TODO: Create a function to initialize app
function init() {
    // console.log("Hello World!")
    const userResponses = inquirer.prompt(questions)
    

   
}

// Function call to initialize app
init();
