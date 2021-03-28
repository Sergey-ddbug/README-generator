const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      message: "Name of a Project?",
      name: "name",
    },
    {
      type: "input",
      message: "Description of your Project",
      name: "description",
    },
    {
      type: "input",
      message: "Installation instructions",
      name: "instructions",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "input",
      message: "Contributers:",
      name: "contributers",
    },
    {
      type: "input",
      message: "Git Hub User name:",
      name: "GitHub",
    },
    {
      type: "input",
      message: "Right your email:",
      name: "mail",
    },
    {
      type: "list",
      message: "Choise a License:",
      name: "license",
      choices: [
        "MIT-yellow",
        "Unlicense-blue",
        "ISC-blue",
        "Apache%202.0-blue",
      ],
    },
  ])
  .then((response) => {
    fs.writeFile("README.MD", generateMarkdown(response), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
