const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./HR/manager.js');
const generateHTML = ({ managerName, managerId, managerEmail, managerOffice }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${managerName}</h1>
      <p class="lead">I am from ${managerId}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${managerEmail}</li>
        <li class="list-group-item">LinkedIn: ${managerOffice}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
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
 
  ]);
  .then((answers) => {
    const manager = new Manager(answers);
    console.log(manager);
  
  });
