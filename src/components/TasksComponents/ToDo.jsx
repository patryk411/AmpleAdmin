import React, { useContext, useState, useEffect } from 'react';
import Task from './Task';
import Checkout from '../Checkout';
import UserProgressContext from '../../store/UserProgressContext';
import tasksData from '../../data/tasks.json';

export default function ToDo() {
	const userProgressCtx = useContext(UserProgressContext);
	const [tasks, setTasks] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editingTaskIndex, setEditingTaskIndex] = useState(null);

	useEffect(() => {
		setTasks(tasksData);
	}, []);

	function handleAddTask(newTask) {
		if (isEditing) {
			setTasks(prevTasks => prevTasks.map((task, idx) => (idx === editingTaskIndex ? newTask : task)));
			setIsEditing(false);
			setEditingTaskIndex(null);
		} else {
			setTasks(prevTasks => [...prevTasks, newTask]);
		}
	}

	function handleRemove(index) {
		setTasks(prevTasks => prevTasks.filter((task, idx) => idx !== index));
	}

	function startEditing(index) {
		setIsEditing(true);
		setEditingTaskIndex(index);
		userProgressCtx.showCheckout(); // Assuming this method toggles checkout visibility
	}

	return (
		<section className='main__todo col-5'>
			<div className='main__todo__content'>
				<div className='main__todo__text'>
					<div>
						<h3 className='main__todo__text--heading'>to do list</h3>
						<p className='main__todo__text--text'>this months task</p>
					</div>
					<div className='main__todo__actions'>
						<button onClick={userProgressCtx.showCheckout} className='main__todo__actions--add'>
							Add Task
							<span className='material-icons'>add</span>
						</button>
					</div>
				</div>
				<ul className='main__todo__list'>
					{tasks.map((task, index) => (
						<Task
							key={index}
							index={index}
							taskDescription={task.taskDescription}
							taskDeadline={task.taskDeadline}
							onRemove={() => handleRemove(index)}
							onEdit={() => startEditing(index)}
						/>
					))}
				</ul>
				{userProgressCtx.progress === 'checkout' && (
					<Checkout onAddTask={handleAddTask} initialData={isEditing ? tasks[editingTaskIndex] : null} />
				)}
			</div>
		</section>
	);
}
