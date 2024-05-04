import React, { useContext, useState, useEffect } from 'react';
import Input from '../UI/Input';
import ModalReal from '../UI/ModalReal';
import UserProgressContext from '../../store/UserProgressContext';

function MenageUsersEdit({ onEditData, initialData }) {
	const userProgressCtx = useContext(UserProgressContext);
	const [rowData, setRowData] = useState({
		name: '',
		designation: '',
		location: '',
		age: '',
	});

	useEffect(() => {
		if (initialData) {
			setRowData({
				name: initialData.name,
				designation: initialData.designation,
				location: initialData.location,
				age: initialData.age,
			});
		}
	}, [initialData]);

	function handleSaveData() {
		const newRowData = {
			name: rowData.name,
			designation: rowData.designation,
			location: rowData.location,
			age: rowData.age,
		};
		fetch(`http://localhost:8081/users/${initialData.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newRowData),
		})
			.then(response => response.json())
			.then(data => {
				onEditData(newRowData);
				userProgressCtx.hideModalDialog();
			})
			.catch(error => console.error('Error:', error));
	}

	function handleEditData(event) {
		const { name, value } = event.target;
		setRowData(prevData => ({
			...prevData,
			[name]: value,
		}));
	}

	function handleFocus(event) {
		const { name } = event.target;
		setRowData(prevData => ({
			...prevData,
			[name]: '',
		}));
	}

	function handleClose() {
		userProgressCtx.hideModalDialog();
	}

	return (
		<ModalReal open={userProgressCtx.progress === 'modaldialog'} onClose={userProgressCtx.progress === 'modaldialog'}>
			<div className='modal-content'>
				<div className='modal-header'>
					<h5 className='modal-title'>Edit User</h5>
					<button onClick={handleClose} className='btn-close-modal'>
						<span className='material-icons'>close</span>
					</button>
				</div>
				<div className='modal-body'>
					<Input
						htmlFor='name'
						label='Name'
						type='text'
						id='name'
						name='name'
						value={rowData.name}
						onChange={handleEditData}
						onFocus={handleFocus}
					/>
					<Input
						htmlFor='designation'
						label='Designation'
						type='text'
						id='designation'
						name='designation'
						value={rowData.designation}
						onChange={handleEditData}
						onFocus={handleFocus}
					/>
					<Input
						htmlFor='location'
						label='Location'
						type='text'
						id='location'
						name='location'
						value={rowData.location}
						onChange={handleEditData}
						onFocus={handleFocus}
					/>
					<Input
						htmlFor='age'
						label='Age'
						type='text'
						id='age'
						name='age'
						value={rowData.age}
						onChange={handleEditData}
						onFocus={handleFocus}
					/>
					<div className='modal-actions'>
						<button onClick={handleSaveData} className='btn btn-save'>
							Save
						</button>
						<button onClick={handleClose} className='btn btn-cancel'>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</ModalReal>
	);
}

export default MenageUsersEdit;
