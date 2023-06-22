import React from 'react';
import './taskCard.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const TaskCard = (props) => {

    return (
        <div className="tasks">
            <h1 className='border-bottom'>{props.title}</h1>
            <ul>
                <li>{props.content}</li>
            </ul>
            <button>
                <DeleteOutlineOutlinedIcon />
            </button>
        </div>
    )
};

export default TaskCard;
