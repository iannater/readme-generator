var fs = require("fs");
var inquire = require("inquirer");
var path = require("path");

const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
        {
            type: "input",
            name: "title",
            message: "Desired Title"
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description for your project"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        },
        {
            type: "input",
            name: "install",
            message: "command to install dependencies",
            default: "npm i"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username",
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please select the licenses you used",
            choices: [
            "MIT [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)", 
            "GPLv3 [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)", 
            "GPL [![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)",
            "CC-0 [![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)"]
        },
        {
            type: "input",
            name: "contributors",
            message: "Please enter contributor guidelines for the project",
        },
        {
            type: "input",
            name: "tests",
            message: " Please enter the test instructions",
        },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquire.prompt(questions)
    .then(response =>{
       writeToFile("READ.md", generateMarkdown(response));
    })
}

// function call to initialize program
init();















// ]).then(function (data) {

//     var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
  
//       if (err) {
//         return console.log(err);
//       }
  
//       console.log("Success!");
  
//     });
//   });