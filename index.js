
const inquirer = require('inquirer');
const engineer = require(`./lib/engineer`)
const intern = require (`./lib/intern`)
const manager = require(`./lib/Manager`)
const fs = require('fs')

const generateHTML = ({ name, GitHubUsername, ID,email,schoolname}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <h3 class="card-name">${name}</p>
  <p class="card-text">${ID},</p>
  <p class="card-text">${email}</p>
  <p class="card-text">${GitHubUsername}</p>
  <p class="card-text">${schoolname}</p>
</div>
</div>
</body>
</html>`;







const menuQuestions = [
  {
    type: 'list',
    message: 'What do you like to do ?',
    name: 'menu',
    choices: [`add employee`, `quit`]
  },


]
const employeeQuestions = [
  {
    type: 'list',
    message: 'What type of employee do you what to be ?',
    name: 'employee',
    choices: [`engineer`, `intern`, `manager`]
  },

]

const engineerQ = [
  {
    type: `input`,
    message: `what is your name`,
    name: `name`,
  },
  {
    type: `input`,
    message: `what is your ID`,
    name: `ID`,
  },
  {
    type: `input`,
    message: `what is your email`,
    name: `email`,
  },
  {
    type: `input`,
    message: `what is your GitHub username`,
    name: `GitHubUsername`,
  },



]

const internQ = [
  {
    type: `input`,
    message: `what is your name`,
    name: `name`,
  },
  {
    type: `input`,
    message: `what is your ID`,
    name: `ID`,
  },
  {
    type: `input`,
    message: `what is your email`,
    name: `email`,
  },
  {
    type: `input`,
    message: `what is your school name`,
    name: `schoolname`,
  },



]
const managerQ = [
  {
    type: `input`,
    message: `what is your name`,
    name: `name`,
  },
  {
    type: `input`,
    message: `what is your ID`,
    name: `ID`,
  },
  {
    type: `input`,
    message: `what is your email`,
    name: `email`,
  },
  {
    type: `input`,
    message: `what is your office number`,
    name: `officeNumber`,
  },



]




function addEmployee() {
  inquirer
    .prompt(employeeQuestions)
    .then((answers) => {
      if (answers.employee == `engineer`) {
        addEngineer();
      } else if (answers.employee == `intern`) {
       addintern();
      } else {
        addmanagerQ();
      }

    })
}

function addEngineer() {
  inquirer
    .prompt(engineerQ)
    .then((answers) => {
      console.log(answers)
      const htmlPageContent = generateHTML(answers);
      fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
      console.log("inside enginerrr")
       const eng= new engineer(answers.name,answers.ID, answers.email,answers.GitHubusername)
    })
}

function addintern(){
  inquirer
  .prompt(internQ)
  .then((answers) => { 
    const htmlPageContent = generateHTML(answers);
      fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    const int = new intern (answers.name,answers.ID,answers.school,answers.email)
  })
}

function addmanagerQ(){
  inquirer
  .prompt(managerQ)
  .then((answers) => { 
    const htmlPageContent = generateHTML(answers);
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
    const man = new manager (answers.name,answers.ID,answers.officeNumber,answers.email)
  })
}




function init() {
  inquirer
    .prompt(menuQuestions)
    .then((answers) => {
      if (answers.menu == `add employee`) {
        console.log(answers);
        addEmployee()
      } else {
        return
      }
    })
}
init()