import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Task({ taskDeadline, taskDescription, onRemove, onEdit, index }) {
	function handleRemoveTask() {
		onRemove(index);
	}

	function handleEditTask() {
		onEdit(index);
	}

	return (
		<li className='main__todo__task'>
			<div className=''>
				<InputGroup className='mb-3'>
					<InputGroup.Checkbox id='1' />
					<FloatingLabel aria-describedby='1'>{taskDescription}</FloatingLabel>
				</InputGroup>
				<span
					className={`${
						taskDeadline === 'today'
							? 'main__todo__task--status'
							: taskDeadline === 'yesterday'
							? 'main__todo__task--status-yesterday'
							: taskDeadline === '1 week'
							? 'main__todo__task--status-week'
							: taskDeadline === '2 week'
							? 'main__todo__task--status-weeks'
							: ''
					}`}>
					{taskDeadline}
				</span>
			</div>
			<div className='main__todo__task__actions'>
				<button onClick={handleEditTask} className='main__todo__task--edit'>
					<span className='material-icons'>edit</span>
				</button>
				<button onClick={handleRemoveTask} className='main__todo__task--delete'>
					<span className='material-icons'>delete</span>
				</button>
			</div>
		</li>
	);
}
