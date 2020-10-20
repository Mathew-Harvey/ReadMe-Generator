const inquirer = require ('inquirer');
const fs = require ('fs');
const questions = [     
        {
            type: 'input',
            message: 'What is the name of you project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'input badge code:',
            name: 'badge'
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
            message: 'Who are the authors?', 
            name: 'authors'
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
        {
            type: 'input',
            message: 'Enter the URL of your application screen shot here.',
            name: 'screenshot'
        },
        {
            type: 'input',
            message: 'Write a table of contents seperated by commas here.',
            name: 'toc'
        },
    ];

console.clear();

inquirer.prompt(questions).then(response => {

    fs.appendFileSync("README.md", ("# " + response.title)  + '\n', function(err) {
        if (err) {
            return console.log(err);
        }        
    });

    fs.appendFileSync("README.md", ('\n' + response.badge)  + '\n', function(err) {
        if (err) {
            return console.log(err);
        }        
    });

    fs.appendFileSync("README.md", ("## Description" + '\n' + response.description)  + '\n', function(err) {
        if (err) {
            return console.log(err);
        }        
    });
});
