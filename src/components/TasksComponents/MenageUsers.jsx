import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import Input from '../UI/Input';
import UserProgressContext from '../../store/UserProgressContext';
import MenageUsersEdit from './MenageUsersEdit';

export default function MenageUsers() {
	const userProgressCtx = useContext(UserProgressContext);
	const [menageUsers, setMenageUsers] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editingTaskIndex, setEditingTaskIndex] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8081/users')
			.then(res => res.json())
			.then(data => setMenageUsers(data))
			.catch(err => console.log(err));
	}, []);

	function handleAdd(newData) {
		if (isEditing) {
			// Aktualizuj istniejące dane, zamiast dodawać nowy wiersz
			setMenageUsers(prevData => prevData.map((data, idx) => (idx === editingTaskIndex ? newData : data)));
			setIsEditing(false);
			setEditingTaskIndex(null);
		}
	}

	function handleEditRow(index) {
		setIsEditing(true);
		setEditingTaskIndex(index);
		userProgressCtx.showModalDialog();
	}

	return (
		<section className='main__menageusers col-7'>
			<div className='main__menageusers__text'>
				<h3 className='main__menageusers--heading'>Menage Users</h3>
				<p className='main__menageusers--text'>You can edit user as well</p>
			</div>
			<div className='main__menageusers__content'>
				<Table>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Designation</th>
							<th>Location</th>
							<th>Age</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Input />
							</td>
							<td>
								<Input />
							</td>
							<td>
								<Input />
							</td>
							<td>
								<Input />
							</td>
						</tr>
						{menageUsers.map((user, index) => (
							<tr key={index} onEdit={() => handleEditRow(index)}>
								<td>{user.name}</td>
								<td>{user.designation}</td>
								<td>{user.location}</td>
								<td>{user.age}</td>
								<td>
									<button onClick={() => handleEditRow(index)}>
										<span className='material-icons'>edit</span>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
			{userProgressCtx.progress === 'modaldialog' && (
				<MenageUsersEdit onEditData={handleAdd} initialData={isEditing ? menageUsers[editingTaskIndex] : {}} />
			)}
		</section>
	);
}
