// Checkout.jsx
import React, { useState, useContext } from 'react';
import Input from './UI/Input';
import { Container, Form } from 'react-bootstrap';
import UserProgressContext from '../store/UserProgressContext';

export default function Checkout({ onAddTask }) {
	const [formData, setFormData] = useState({
		deadline: '',
		description: '',
	});
	const userProgressCtx = useContext(UserProgressContext);
	const [error, setError] = useState('');

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));
	}

	function handleSaveTask() {
		if (!formData.deadline || !formData.description) {
			setError('Please fill in all fields');
			return;
		} else {
			const newTask = {
				taskDeadline: formData.deadline,
				taskDescription: formData.description,
			};
			onAddTask(newTask);
			userProgressCtx.hideCheckout();
		}
	}

	function handleCloseModal() {
		userProgressCtx.hideCheckout();
	}

	return (
		<div className='checkout'>
			<Container>
				<div className='checkout__content'>
					<h3 className='checkout--heading'>ToDo Editor</h3>
					<Form className='checkout__form'>
						<div className='checkout__row'>
							<Input
								label='Description'
								type='text'
								id='description'
								name='description'
								value={formData.description}
								onChange={handleChange}
								required
							/>
							<Input
								label='Deadline'
								type='text'
								id='deadline'
								name='deadline'
								value={formData.deadline}
								onChange={handleChange}
								required
							/>
						</div>
					</Form>
				</div>
				<div className='checkout__actions'>
					<div>{error && <p className='checkout__actions--error'>All fields should be filled</p>}</div>
					<button onClick={handleCloseModal} className='checkout--close'>
						<span className='material-icons'>close</span>
					</button>
					<button className='checkout__actions--btn' onClick={handleSaveTask}>
						save
					</button>
				</div>
			</Container>
		</div>
	);
}
