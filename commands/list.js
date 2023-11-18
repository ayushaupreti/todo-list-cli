import conf from 'conf'
import chalk from 'chalk'

function list(){
    const confObject = new conf({ projectName: 'todos' });

    const todoList = confObject.get('todo-list')

	if (todoList && todoList.length) {
		todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`- ${task.text} ✅`)
                )
            } else {
                console.log(
                    chalk.redBright(`- ${task.text}`)
                )
            }
        })
	} else {
        console.log(chalk.red.bold('You don\'t have any tasks yet.'))
	}
}

export default list
