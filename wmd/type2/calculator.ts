import chalk from 'chalk';
console.log(chalk.bgBlueBright("calculator"))
import inquirer from 'inquirer';
async function main() {
    let user = await inquirer.prompt([
        
            {
                type: 'number',
                name: "number1",
                message: chalk.green('Enter Number1')
            },
            {
                type: 'number',
                name: "number2",
                message: chalk.greenBright('Enter Number2')
            },
            {
                type: 'list',
                name: "sign",
                message: chalk.green('Enter Number1select operator'),
                choices: ['Add','Subtract','Multiply','Division']
            }
            
            ])
            

            let result = 0;
            if (user.sign === "Add"){
                result = user.number1 + user.number2;
            } else if (user.sign === "Subtract"){
                result = user.number1 - user.number2;
            } else if (user.sign === "Multiply"){
                result = user.number1 * user.number2;
            } else if (user.sign === "Division"){
                result = user.number1 / user.number2;
            } else {result = 0;}
            console.log(chalk.whiteBright(`Result = ${result}`));
    
  } 
  main();
  
  
