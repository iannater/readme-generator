// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}
  ## Description <br> ${data.description}

  #Questions <br>
   If any questions please contact me via email at ${data.email}

`;
}

module.exports = generateMarkdown;
