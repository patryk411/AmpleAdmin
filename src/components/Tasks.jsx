import React from 'react';
import ToDo from './TasksComponents/ToDo';
import MenageUsers from './TasksComponents/MenageUsers';
import { UserProgressContextProvider } from '../store/UserProgressContext';

export default function Tasks() {
	return (
		<UserProgressContextProvider>
			<div className='monthlyraport'>
				<ToDo />
				<MenageUsers />
			</div>
		</UserProgressContextProvider>
	);
}
