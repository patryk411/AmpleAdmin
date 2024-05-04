import React from 'react';
import Form from 'react-bootstrap/Form';
import user from '../assets/img/user.jpg';
import user2 from '../assets/img/user2.jpg';
import user3 from '../assets/img/user3.jpg';
import MonthlyEarningsUsersRow from './MonthlyEarningsComponents/MonthlyEarningsUsersRow';

export default function MonthlyEarnings() {
	return (
		<section className='main__earnings col-4'>
			<div className='main__earnings__text'>
				<div>
					<h3 className='main__earnings__text--head'>Monthly Earnings</h3>
					<span className='main__earnings__text--count'>$580.50</span>
				</div>
				<Form.Select aria-label='Default select example'>
					<option selected>January 2022</option>
					<option value='1'>January 2021</option>
					<option value='2'>January 2020</option>
					<option value='3'>January 2019</option>
				</Form.Select>
			</div>
			<div className='main__earnings__users'>
				<MonthlyEarningsUsersRow userName='Andrew Simon' userImg={user2} userDate='10-11-2016' userCount='46' />
				<MonthlyEarningsUsersRow userName='John Deo' userImg={user3} userDate='01-11-2018' userCount='56' />
				<MonthlyEarningsUsersRow userName='Emily Sion' userImg={user} userDate='14-04-2018' userCount='12' />
				<MonthlyEarningsUsersRow userName='John Deo' userImg={user3} userDate='01-11-2018' userCount='56' />
				<button className='main__earnings__btn'>Withdrow Money</button>
			</div>
		</section>
	);
}
