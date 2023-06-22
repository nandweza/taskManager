import { useState } from 'react';
import './createTask.css';

const CreateTask = (props) => {
    const [task, setTask] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setTask(prevTask => {
            return {
                ...prevTask,
                [name]: value
            };
        });
    }

    function submitTask(event) {
        props.onAdd(task);
        setTask({
            title: '',
            content: ''
        });
        event.preventDefault();
    }

    return (
        <form>
            <input 
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <textarea 
                name="content"
                value={task.content}
                onChange={handleChange}
                placeholder="Add tasks here..."
            />
            <button onClick={submitTask}>
                Add
            </button>
        </form>
    )
};

export default CreateTask;
