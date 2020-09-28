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
            message: "What is the description for your project?"
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions for installation?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are your usage instructions?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is this project under? (check all that apply)',
            choices: ['PD', 'CC0', 'MIT', 'Apache', 'MPL', 'GPL', 'AGPL', 'JRL', 'AFPL', 'Private', 'None']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What are your contribution guidelines?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests have you done?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What questions would you like to add?'
        }
    ])
    .then(answers => console.log(answers));
};


promptUser();