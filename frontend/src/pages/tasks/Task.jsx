import React, { useEffect, useState } from 'react';
import CreateTask from '../../components/createTask/CreateTask';
import TaskCard from '../../components/taskCard/TaskCard';
import Topbar from '../../components/topbar/Topbar';
import axios from 'axios'; // Import Axios

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

	// Fetch tasks from the backend when the component mounts
	useEffect(() => {
		fetchTasks();
	}, []);

	// Function to fetch tasks from the backend
	const fetchTasks = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:8000/api/task');
			setTasks(response.data); // Assuming the response contains an array of tasks
		} catch (error) {
			console.error('Error fetching tasks:', error);
		}
	};

	function addTask(newTask) {
		setTasks(prevTasks => {
			return [...prevTasks, newTask];
		});
	}

	function deleteTask(id) {
		setTasks(prevTasks => {
			return prevTasks.filter((taskItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<>
			<Topbar />
			<CreateTask onAdd={addTask} />
			<div className='time'>
				<h4 className='text-center'>{date}</h4>
				<h5 className='text-center'>{time}</h5>
			</div>
			{tasks.map((taskItem, index) => {
				return (
					<TaskCard
						key={index}
						id={index}
						title={taskItem.title}
						content={taskItem.content}
						onDelete={deleteTask}
					/>
				);
			})}
		</>
	);
};

export default Task;

