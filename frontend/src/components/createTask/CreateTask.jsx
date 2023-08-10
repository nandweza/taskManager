import { useState } from 'react';
import './createTask.css';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import axios from 'axios';

const CreateTask = (props) => {
    const [task, setTask] = useState({
        title: '',
        content: ''
    });

    const [isExpand, setExpand] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setTask(prevTask => {
            return {
                ...prevTask,
                [name]: value
            };
        });
    }

    async function submitTask(event) {
        // props.onAdd(task);
        // setTask({
        //     title: '',
        //     content: ''
        // });
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/task/', task);

            props.onAdd(response.data);
            setTask({
                title: '',
                content: ''
            })
        } catch (err) {
            console.log(err);
        }
    }

    function expand() {
        setExpand(true);
    }


    return (
        <form className='taskForm'>
            { isExpand && <input 
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Title"
            />}
            <textarea 
                name="content"
                onClick={expand}
                value={task.content}
                onChange={handleChange}
                placeholder="Add tasks here..."
                rows={isExpand ? 3 : 1}
            />
            <Zoom in={isExpand}>
                <Fab onClick={submitTask}>
                    <AddOutlinedIcon />
                </Fab>
            </Zoom>
        </form>
    )
};

export default CreateTask;
