import conf from 'conf'
import chalk from 'chalk'

function add(task) {
    const confObject = new conf({ projectName: 'todos' });

    let todosList = confObject.get('todo-list')

    if (!todosList) {
        todosList = []
    }

    todosList.push({
        text: task,
        done: false
    })

    confObject.set('todo-list', todosList)

    console.log(
        chalk.green.bold('Task has been added successfully!')
    )
}

export default add