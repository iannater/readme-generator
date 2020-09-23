// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}


  ## Description 
  ${data.description} 

  ## Table of Contents
  [here](#description)
  [here](#installation)
  [here](#usage)
  [here](#license)
  [here](#Contributor Guidelines)
  [here](#tests)
  [here](#questions)

  ## Installation
  ${data.install}

  ## Usage
  1. In your terminal cd into the Develop folder that contains the index.js file.
  2. Run the index file using node (node index.js)
  3. You will then answer a series of questions. These questions will make up your read me file so please read them carefully. If you make a mistake you can always edit it once the file is made.
  4. Once complete the readme file will be created inside of the Develop folder.
  5. Feel free to then move the read me file into your personal folder from there. 

  ## License
  ${data.license}

  ## Contributor Guidelines
  ${data.contributors}

  ## Tests 
  ${data.tests}

  #Questions
   If you have any questions please contact me via email at ${data.email}, you can also follow me on GitHub github.com/${data.username}

`;
}

module.exports = generateMarkdown;
