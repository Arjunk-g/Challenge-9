// TODO: Include packages needed for this application
//Installed Inquirer, it was already there
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?',
    'Give a Description of your project:',
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
fs.writeFile('README.md', process.argv[2], (err) =>
    err ? console.error(err) : console.log('Heres a read me')

);

//  }

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
