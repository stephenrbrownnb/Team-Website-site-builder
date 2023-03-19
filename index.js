const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const directory = [];


function addManager(){
  console.log('Adding a Manager');
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please Enter the Manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Manager's Company Id Number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Manager's Email Address?",
      },
      {
        type: 'input',
        name: 'office',
        message: "What is the Manager's Office Number",
      },
   
    ])
    .then((answers) => {
      const manager = new Manager(answers.name,answers.id,answers.email,answers.office);
      directory.push(manager);
      promptToAddEmployee();
    });
}
function addEngineer() {
  console.log('Adding an Engineer');
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please Enter the Engineer's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's Company Id Number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's Email Address?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's GitHub username?",
      },
   
    ])
    .then((answers) => {
      const engineer = new Engineer(answers);
      directory.push(engineer);
      promptToAddEmployee();
    });
};
function addIntern(){
  console.log('Adding an Intern');
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please Enter the Intern's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Intern's Company Id Number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Intern's Email Address?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What school did the Intern attend?",
      },
   
    ])
    .then((answers) => {
      const intern = new Intern(answers);
      directory.push(intern);
      promptToAddEmployee();
    });
};

function promptToAddEmployee() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'What type of employee would you like to add?',
      choices: ['Engineer', 'Intern', 'Finished adding employees']
    }
  ])
  .then((answers) => {
    if (answers.employeeType === 'Engineer') {
      addEngineer();
    } else if (answers.employeeType === 'Intern') {
      addIntern();
    } else {
      console.log('Finished adding employees');
      console.log(directory);
    }
  });
}
function teamBuilder(){
console.log("Welcome to the team Website Builder");
addManager();
};
teamBuilder();