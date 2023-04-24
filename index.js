// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    type: "input",
    name: "repoName",
    message: "What is the name of your Github repo?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your Github username?",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
      "None"
    ],
    name: "license",
  },
];

// const genReadme = (answers) => {
//     return `
// # READEME.md Generator

// ## my name is ${answers.firstName} ${answers.lastName}

// ### The name of my project is  ${answers.repoName}

// ### The type of licensing I will be using for thie project is ${answers.license}
//     `
// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// writeToFile();

// TODO: Create a function to initialize app
function init() {
  // console.log("Hello World!")
  inquirer.prompt(questions).then((answers) => {
    // console.log(generateMarkdown(answers));
    writeToFile("GenREADME.md", generateMarkdown(answers));
    console.log('file successfully written')
  });
}

// Function call to initialize app
init();
