// TODO: Include packages needed for this application
//Installed Inquirer, it was already there
// TODO: Create an array of questions for user input


const inquirer = require('inquirer');
const fs = require('fs');

// const questions = [{
//           type: 'input',
//           message: 'What is the title of your project?',
//           name: 'title',
//         },
//         {
//           type: 'input',
//           message: 'Description section of your project:',
//           name: 'description',
//         },
//         {
//             type: 'confirm',
//             message: 'Would you like a table of contents?',
//             name: 'tableOC',
//           },
//           {
//             type: 'confirm',
//             message: 'instillation section:',
//             name: 'installSection',
//           },
//           {
//             type: 'confirm',
//             message: 'Would you like to include usage information?',
//             name: 'usageInfo',
//           },
//           {
//             type: 'confirm',
//             message: 'Add to contribution guidlines?',
//             name: 'contGL',
//           },  
//         {
//           type: 'input',
//           message: 'Test Instructions:',
//           name: 'testInstructions',
//         },
//       ]

// inquirer
// .prompt(questions)
//     .then((response) =>
//     fs.appendFile('README.md', console.log(JSON.stringify(response, null, 2)), (err) =>
//         err ? console.error(err) : console.log("Bruh")
//     )
//       .catch((err) => {console.log("This bruh")}))






// inquirer
//     .prompt([
//     {
//       type: 'input',
//       message: 'What is the title of your project?',
//       name: 'title',
//     },
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
//   ])
//   .then((response) =>
//     response.title !== 15
//       ? console.log(response.title)
//       : console.log('Bruh')
//   );

//   const thisIsIt = () => {
//     fs.appendFile('README.md', `${response.title}\n`, (err) =>
//         err ? console.error(err) : console.log('Heres a read me')
    
//     );
//     }
//     thisIsIt();

// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {

// // THE \n is to put the input on the next line in the file

// //  }

// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();



inquirer
    .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description section of your project:',
      name: 'description',
   },

    ])
    .then((response) =>
    fs.appendFile('README.md', `Title: ${response.title}\n `, (err) =>
        err ? console.error(err) : console.log(err)
    
    ));
