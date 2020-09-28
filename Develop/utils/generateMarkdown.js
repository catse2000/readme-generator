// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)
  ## Description
    ${data.desc}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    This project has a "${data.license}" license.

  ## Contributions
    ${data.contribution}

  ## Tests
    ${data.tests}

  ## Questions
  My username is ${data.username} <br>
  You can see my other work at: [https://github.com/${data.username}](https://github.com/${data.username}) <br>
  Contact me at: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
