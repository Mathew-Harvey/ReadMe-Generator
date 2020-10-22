const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
    {
        type: 'input',
        message: 'What is the name of you project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a little info about your project and/ or overview that explains what the project is about.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter a short description of the motivation behind the creation and maintenance of the project. This should explain why the project exists.',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'Please provide step by step series of examples and explanations about how to get a development env running.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'If people like your project they’ll want to learn how they can use it. Please provide a step by step guide to use your project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can people contribute into your project? If you have a contributing guideline please enter link here also.',
        name: 'contribution'
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
        message: 'How can someone test your application?',
        name: 'test'
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
        message: 'Enter the file name (FILENAME.jpg) of your application screen shot here. INSTRUCTIONS: Please upload a .jpg screen shot to the /assets folder of your root directory and past the name here:' ,
        name: 'screenshot'
    },
    {
        type: 'input',
        message: 'Enter the file name (FILENAME.gif) of your application video. INSTRUCTIONS: Record your application working using an application like this: https://www.screentogif.com/. Save the video file as a .gif to the /assets folder of your root directory and past the file name here:' ,
        name: 'demo'
    },

];

console.clear();

inquirer.prompt(questions).then(response => {

    fs.appendFileSync("README.md", ("# " + response.title) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("![GitHub followers](https://img.shields.io/github/followers/" + response.username + "?style=social)" + '\n') + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("![License type](https://img.shields.io/badge/License-" + response.license + "-Blue)" + '\n') + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });
 
    fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '- [Demo](##Demo-)'+ '\n' + '- [Description](##Description-)' + '\n' + '- [Motivation](#Motivation-)' + '\n' +
        '- [Installation](#Installation-)' + '\n' + '- [Usage](#Usage-)' + '\n' + '- [License](#License-)' + '\n' + '- [How to Contribute](#How-to-Contribute-)' +
        '\n' + '- [Authors](#Authors-)' + '\n' + '- [Questions](#Questions-)' + '\n' + '- [Application ScreenShots](#Application-ScreenShots-)') + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## Demo 💻" +  '\n' + "![Demo Video](/assets/" + response.demo + ")") + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## Description 🧐" + '\n' + response.description) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## Motivation 🚀" + '\n' + response.motivation) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## Installation 🛠️" + '\n' + response.installation) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## Usage 🏃‍♀️" + '\n' + response.usage) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## License 🎓" + '\n' + "This application is licensed under: " + response.license) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## How to Contribute 🍰" + '\n' + response.contribution) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## Authors ✨" + '\n' + response.authors) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## Questions 🤔" + '\n' + "Please feel free to contact me with any questions you may have: " + '\n' ) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ('\n' + "### GitHub: " + "https://github.com/" + response.username) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ('\n' + "### Email: " + response.email) + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });

    fs.appendFileSync("README.md", ("## Application ScreenShots 📸" + '\n' + "![Screen Shot](/assets/" + response.screenshot + ")") + '\n', function (err) {
        if (err) {
            return console.log(err);
        }
    });
});
