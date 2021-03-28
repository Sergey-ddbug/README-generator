function generateMarkdown(data) {
  console.log(data);
  return `
   <h1>Title Name: ${data.name} </h1>
  
   ## Description : 
   
   ${data.description}


  
   <h3>## Content :

  - [Description](#description)
  - [Instruction](#instructions)
  - [Usage](#usage)
  - [Contributers](#contributers)
  - [GitHub](#GitHub)
  - [Email](#mail)
</h3>


## Instruction : 

${data.instructions}


## Usage : 

${data.usage}


## Contributers : 

${data.contributers}


## GitHub : (https://github.com/${data.GitHub})


## Email :  ${data.mail}


  ![badge](https://img.shields.io/badge/license-${data.license}.svg)

`;
}

module.exports = generateMarkdown;
