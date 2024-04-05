#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 12345;
console.log("WELCOME TO ATM MACHINE!!!");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please Enter Your Pin Code:",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct login successful!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"],
        },
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please Enter Amount To Withdraw",
            },
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient Balance.");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} withdrawal successful.`);
            console.log(`Your remaining balance is ${myBalance}.`);
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else {
    console.log("Login Unsuccessful, Please Enter Correct Pin Code...");
}
