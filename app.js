npx readme-md-generator
const require ("fs");
const inquirer = require('inquirer');
const readMeGen = require('readMeGen');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ]);
}
  
  promptUser(text).then(answers => {
    return console.log(answers);
  });

/*inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));*/
