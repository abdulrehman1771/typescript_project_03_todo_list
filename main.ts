#! /usr/bin/env node

import inquirer from "inquirer";

let lst: string[] = [];

while (true) {
  let task = await inquirer.prompt([
    {
      name: "add",
      type: "list",
      message: "What do you want to do?",
      choices: ["Add Task", "Remove Task", "View Tasks", "Cancel"],
    },
  ]);

  if (task.add === "Add Task") {
    let addition = await inquirer.prompt({
      name: "tsk",
      // type:'string',
      message: "Name the task below",
    });
    lst.push(addition.tsk);
    console.log('Task added successfully.');
    
  } else if (task.add === "Remove Task") {
    let remove = await inquirer.prompt({
      name: "rmv",
      // type:'',
      message: "Name the task below",
    });
    if (lst.includes(remove.rmv)) {
      for (let i = 0; i < lst.length; i++) {
        if (remove.rmv === lst[i]) {
          lst.splice(i, 1);
          console.log("Task removed successfully.");
        }
      }
    } else {
      console.log("Incorrect name.");
    }
  } else if (task.add === "View Tasks") {
    console.log(lst);
  } else if (task.add === "Cancel") {
    break;
  }
}