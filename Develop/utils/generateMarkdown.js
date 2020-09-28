// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
    ${data.desc}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions?)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    ${data.license}

  ## Contributions
    ${data.contribution}

  ## Tests
    ${data.tests}

  ## Questions?
    ${data.username}
    ${data.email}

`;
}

module.exports = generateMarkdown;
