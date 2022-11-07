// TODO: Include packages needed for this application
//Installed Inquirer, it was already there
// TODO: Create an array of questions for user input
// const questions = ['What is the title of your project?',
//     'Give a Description of your project:',
// ];

const inquirer = require('inquirer');
const fs = require('fs');

const thisIsIt = () => {
    fs.appendFile('README.md', `${name.title}\n`, (err) =>
        err ? console.error(err) : console.log('Heres a read me')
    
    );
    }

inquirer
    .prompt([
    {
      type: 'confirm',
      message: 'What is the title of your project?',
      name: 'title',
    },
    // {
    //   type: 'input',
    //   message: 'Description section of your project:',
    //   name: 'description',
    // },
    // {
    //     type: 'confirm',
    //     message: 'Would you like a table of contents?',
    //     name: 'tableOC',
    //   },
    //   {
    //     type: 'confirm',
    //     message: 'instillation section:',
    //     name: 'installSection',
    //   },
    //   {
    //     type: 'confirm',
    //     message: 'Would you like to include usage information?',
    //     name: 'usageInfo',
    //   },
    //   {
    //     type: 'confirm',
    //     message: 'Add to contribution guidlines?',
    //     name: 'contGL',
    //   },  
    // {
    //   type: 'input',
    //   message: 'Test Instructions:',
    //   name: 'testInstructions',
    // },
  ])
  .then((response) =>
    response.title === true
      ? thisIsIt()
      : console.log('Bruh')
  );


// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {

// // THE \n is to put the input on the next line in the file

// //  }

// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();
