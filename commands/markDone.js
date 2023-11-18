import conf from 'conf'
import chalk from 'chalk'

function markDone({tasks}) {
    const confObject = new conf({ projectName: 'todos' });

    let todosList = confObject.get('todo-list')

    if (todosList) {
        //loop over the todo list tasks
        todosList = todosList.map((task, index) => {
            //check if the user specified the tasks to mark done
            if (tasks) {
                //check if this task is one of the tasks the user specified
                if (tasks.indexOf(index.toString()) !== -1) {
                    //mark only specified tasks by user as done
                    task.done = true
                }
            } else {
                //if the user didn't specify tasks, mark all as done
                task.done = true
            }
            return task
        });
    }

        //set the new todo-list
        confObject.set('todo-list', todosList)
}

export default markDone