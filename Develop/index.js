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
            message: "what is up?"
        },
        {
            type: "input",
            name: "install",
            message: "command to install depn",
            default: "npm i"
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