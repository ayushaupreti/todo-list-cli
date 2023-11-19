import conf from "conf";
import chalk from "chalk";

function clear() {
  const confObject = new conf({ projectName: "todos" });

  let todosList = confObject.get("todo-list");

  todosList = [];

  confObject.set("todo-list", todosList);

  console.log(chalk.green.bold("TODO list has been cleared!"));
}

export default clear;
