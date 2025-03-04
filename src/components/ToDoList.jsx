import react from 'react';

const ToDoList = () => {

    const [tasks, setTasks] = react.useState(["Task 1", "Task 2", "Task 3"]);
    const [newtask, setNewTask] = react.useState("");

    const addTask = () => {
        if (newtask !== ""){
            setTasks([...tasks, newtask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const moveTaskUp = (index) => {
        if (index === 0) return;
        const newTasks = [...tasks];
        const temp = newTasks[index];
        newTasks[index] = newTasks[index - 1];
        newTasks[index - 1] = temp;
        setTasks(newTasks);
    }

    const moveTaskDown = (index) => {
        if (index === tasks.length - 1) return;
        const newTasks = [...tasks];
        const temp = newTasks[index];
        newTasks[index] = newTasks[index + 1];
        newTasks[index + 1] = temp;
        setTasks(newTasks);
    }

    return (
        <div className='todolist'>
            <h1 className='todolist-header'>To-Do List</h1>
            <div className='todolist-input-container'>
                <input type="text" className='todolist-input' value={newtask} onChange={(e) => setNewTask(e.target.value)} />
                <button className='add-button' onClick={() => addTask()}>Add Task</button>
                <button className='add-button' onClick={() => setTasks([])}>Clear All</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className='todolist-task'>
                        <span>{task}</span>
                        <button className='todolist-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='todolist-button' onClick={() => moveTaskUp(index)}>🔼</button>
                        <button className='todolist-button' onClick={() => moveTaskDown(index)}>🔽</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ToDoList;