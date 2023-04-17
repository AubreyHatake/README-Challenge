import inquirer from 'inquirer';
import fs from 'fs';
import  genReadme  from './utils/genFiles.js'


inquirer.prompt([
    {
        type: "input",
        name: "firstName",
        message: "What is your first name?"
    },
    {
        type: "input",
        name: "lastName",
        message: "What is your last name?"
    },
    {
        type: "list",
        name: "car",
        message: "What car would you like to buy?",
        choices: ["Honda", "Tesla", "Nissan", "Ford", "Lamb"]
    }
])
.then( result => {
    fs.writeFile("TUTOR.md", genReadme(result), (err) => console.log(err))
})
.catch(err => console.log(err))




