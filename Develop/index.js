const inquirer = require('inquirer');

// const fs = require('fs');
// const generateReadMe = require('./src/readme-template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your Project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log("Please enter a name for your Project!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desc',
            message: "What is the description for your project? (Required)",
            validate: descInput => {
                if (descInput) {
                    return true;
                }
                else{
                    console.log("Please enter a description!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does this project fall under?',
            choices: ['PD', 'CC0', 'MIT', 'Apache', 'MPL', 'GPL', 'AGPL', 'JRL', 'AFPL', 'Private', 'None']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are your contribution guidelines?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests have you done?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }
                else{
                    console.log("Please enter a username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter an email address!");
                    return false;
                }
            }
        }
    ])
    .then(answers => console.log(answers));
};


promptUser();