import './createTask.css';

const CreateTask = () => {
    return (
        <form>
            <input 
                name="title"
                placeholder="Title"
            />
            <textarea 
                name="content"
                placeholder="Add tasks here..."
            />
            <button>
                Add
            </button>
        </form>
    )
};

export default CreateTask;
