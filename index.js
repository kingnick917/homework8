
const inquirer = require('inquirer');
const engineer = require(`./lib/engineer`)


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
      console.log(answers)
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
      console.log("inside enginerrr")
       const eng= new engineer(answers.name,answers.ID, answers.email,answers.GitHubusername)
    })
}

function addintern(){
  inquirer
  .prompt(internQ)
  .then((answers) => { 
    const int = new internQ (answers.name,answers.ID,answers.school,answers.email)
  })
}

function addmanagerQ(){
  inquirer
  .prompt(managerQ)
  .then((answers) => { 
    const man = new managerQ (answers.name,answers.ID,answers.officeNumber,answers.email)
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