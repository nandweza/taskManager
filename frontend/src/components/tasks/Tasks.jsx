import './tasks.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Tasks = () => {
    return (
        <div className="tasks">
            <h1 className='border-bottom'>Title</h1>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
            <button>
                <DeleteOutlineOutlinedIcon />
            </button>
        </div>
    )
};

export default Tasks;
