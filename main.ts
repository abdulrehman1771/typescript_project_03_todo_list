#! /usr/bin/env node

import inquirer from "inquirer";

let lst: string[] = [];

while (true) {
  let task = await inquirer.prompt([
    {
      name: "add",
      type: "list",
      message: "What do you want to do?",
      choices: [
        "Add Task",
        "Remove Task",
        "View Tasks",
        "Update Task",
        "Cancel",
      ],
    },
  ]);

  if (task.add === "Add Task") {
    let addition = await inquirer.prompt({
      name: "tsk",
      // type:'string',
      message: "Name the task below",
    });
    lst.push(addition.tsk);
    console.log("Task added successfully.");
  } else if (task.add === "Remove Task") {
    let remove = await inquirer.prompt({
      name: "rmv",
      // type:"",
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
    lst.forEach((element) => {
      console.log(element);
    });
  } else if (task.add === "Update Task") {
    let from_val = await inquirer.prompt({
      name: "from",
      // type:'string',
      message: "Enter the name of task you want to update",
    });

    if (lst.includes(from_val.from)) {
      let to_val = await inquirer.prompt({
        name: "to",
        // type:'',
        message: "Enter new task name",
      });

      for (let element = 0; element < lst.length; element++) {
        if (lst[element] === from_val.from) {
          lst[element] = to_val.to;
          console.log("Task updated successfully!");
          break;
        }
      }
    } else {
      console.log("Couldn't find task. Please enter correct task name.");
    }
  } else if (task.add === "Cancel") {
    break;
  }
}
