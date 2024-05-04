import React from 'react';

export default function MonthlyEarningsUsersRow({ userCount, userDate, userName, userImg }) {
	return (
		<div className='main__earnings__users-info'>
			<div className='main__earnings__users-row'>
				<img src={userImg} alt='' />
				<div className='main__earnings__users-info__text'>
					<h5 className='main__earnings__users-info__text--heading'>{userName}</h5>
					<span className='main__earnings__users-info__text--text'>{userDate}</span>
				</div>
			</div>
			<span className='main__earnings__users-info--span'>${userCount}</span>
		</div>
	);
}
