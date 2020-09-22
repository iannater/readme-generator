// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}


  ## Description 
  ${data.description} 

  ## Table of Contents

  ## Installation
  ${data.install}

  ## Usage

  ## License
  MIT
  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)


  ## Contributor Guidelines
  ${data.contributors}

  ## Tests 
  ${data.tests}



  #Questions
   If you have any questions please contact me via email at ${data.email}, you can also follow me on GitHub. My username is ${data.username}.

`;
}

module.exports = generateMarkdown;
