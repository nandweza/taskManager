import CreateTask from '../../components/createTask/CreateTask';
import Tasks from '../../components/tasks/Tasks';
import Topbar from '../../components/topbar/Topbar';

const Task = () => {
  	return (
    	<>
			<Topbar />
      		<CreateTask />
			<Tasks />
    	</>
  	)
};

export default Task;