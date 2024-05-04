import React from 'react';

export default function CommentRow({ imgUser, userDate, userName, userText, status }) {
	return (
		<div className='main__recentcom__row'>
			<img src={imgUser} alt='' />
			<div className='main__recentcom__users-info'>
				<div className='main__recentcom__text'>
					<h3 className='main__recentcom__text--heading'>{userName}</h3>
					<p className='main__recentcom__text--text'>{userText}</p>
				</div>
				<div className='main__recentcom__actions-info'>
					<p
						className={`${
							status === 'pending'
								? 'main__recentcom__actions-info--span'
								: status === 'approved'
								? 'main__recentcom__actions-info--span-approved'
								: status === 'rejected'
								? 'main__recentcom__actions-info--span-rejected'
								: ''
						}`}>
						{status}
					</p>
					<p className='main__recentcom__actions-info--data'>{userDate}</p>
				</div>
			</div>
		</div>
	);
}
