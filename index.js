const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util')
const writeFileAsync = util.promisify(fs.writeFile);

//Create an array of questions for user

function promptUser() {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the name of you project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions for your project? If there are no instructions, write NONE.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How would you like your application to be used?',
            name: 'usage'
        },
        {
            type: 'input',
            messgage: 'Who contributed to this project?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'What are the usage instructions?',
            name: 'test'
        },
        {
            type: 'checkbox',
            message: 'Please select a license.',
            choices: [
                'Apache',
                'MIT',
                'ISC',
                'GNU GPLv3'
            ],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Who is to be credited for this work?', 
            name: 'credit'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
    ]);
}
promptUser()
// function generateReadMe(response) {
//     return
// ## ${response.title}

// # 
// }