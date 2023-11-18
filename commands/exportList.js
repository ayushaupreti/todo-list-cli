import conf from 'conf'
import fs  from 'fs'
import chalk from 'chalk'

function exportList({path}) {
    const confObject = new conf({ projectName: 'todos' });

    let todosList = confObject.get('todo-list')

    if (todosList) {
        let file = path ? fs.createWriteStream(`${path}`) : fs.createWriteStream('./todos.txt');
        todosList = todosList.map((task, index) => {
            file.write(`- ${task.text} ${task.done ? '✅' : ''} \n`)
        });
        
        file.end();
    }

    console.log(
        chalk.green.bold(`TODO list exported to ${path ? path : './todos.txt'}!`)
    )
}

export default exportList