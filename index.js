const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


function addManager(){
  console.log('Adding a Manager');
  inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "Please Enter the Manager's name?",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is the Manager's Company Id Number?",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the Manager's Email Address?",
      },
      {
        type: 'input',
        name: 'managerOffice',
        message: "What is the Manager's Office Number",
      },
   
    ])
    .then((answers) => {
      const manager = new Manager(answers);
      console.log(manager);
      promptToAddEmployee();
    });
}
function addEngineer() {
  console.log('Adding an Engineer');
  inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "Please Enter the Engineer's name?",
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is the Engineer's Company Id Number?",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the Engineer's Email Address?",
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's GitHub username?",
      },
   
    ])
    .then((answers) => {
      const engineer = new Engineer(answers);
      console.log(engineer);
      promptToAddEmployee();
    });
};
function addIntern(){
  console.log('Adding an Intern');
  inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: "Please Enter the Intern's name?",
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the Intern's Company Id Number?",
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's Email Address?",
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What school did the Intern attend?",
      },
   
    ])
    .then((answers) => {
      const intern = new Intern(answers);
      console.log(intern);
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
    }
  });
}
function teamBuilder(){
console.log("Welcome to the team Website Builder");
addManager();
};
teamBuilder();