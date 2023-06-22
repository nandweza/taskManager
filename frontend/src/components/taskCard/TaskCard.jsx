import React, { useState } from 'react';
import './taskCard.css';
import {
    DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
    EditCalendarOutlined as EditCalendarOutlinedIcon,
    NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
    CheckCircleOutlined as CheckCircleOutlinedIcon
} from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

const TaskCard = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    function handleDelete() {
        props.onDelete(props.id);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="tasks">
            <h1 className='border-bottom'>{props.title}</h1>
            <p>{props.content}</p>
            <div>
                <Button aria-controls="actions-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreVertIcon />
                </Button>
                <Menu
                    id="actions-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <CheckCircleOutlinedIcon />
                        Mark Complete
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NotificationsNoneOutlinedIcon />
                        Set Reminder
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <EditCalendarOutlinedIcon />
                        Edit
                    </MenuItem>
                    <MenuItem onClick={handleDelete}>
                        <DeleteOutlineOutlinedIcon />
                        Delete
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
};

export default TaskCard;
