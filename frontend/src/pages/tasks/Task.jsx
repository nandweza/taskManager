import { useEffect, useState } from 'react';
import CreateTask from '../../components/createTask/CreateTask';
import TaskCard from '../../components/taskCard/TaskCard';
import Topbar from '../../components/topbar/Topbar';

const Task = () => {

	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentDate = new Date();
			
			const newDate = currentDate.toDateString();
			const newTime = currentDate.toLocaleTimeString();

			setDate(newDate);
			setTime(newTime);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	function addTask(newTask) {
		setTasks(prevTasks => {
			return [...prevTasks, newTask];
		});
	}

  	return (
    	<>
			<Topbar />
      		<CreateTask 
				onAdd={addTask}
			/>
			<div className='time'>
				<h4 className='text-center'>{date}</h4>
				<h5 className='text-center'>{time}</h5>
			</div>
			{tasks.map(taskItem => {
				return <TaskCard title={taskItem.title} content={taskItem.content} />
			})}
    	</>
  	)
};

export default Task;