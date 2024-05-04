import React from 'react';
import user from '../assets/img/user.jpg';
import user2 from '../assets/img/user2.jpg';
import user3 from '../assets/img/user3.jpg';
import user4 from '../assets/img/user4.jpg';
import user5 from '../assets/img/user5.jpg';
import CommentRow from './RecentSalesComponents/CommentRow';

export default function RecentComments() {
	return (
		<section className='main__recentcom col-lg-6'>
			<div className='main__recentcom__header'>
				<div className='main__recent__row'>
					<h3 className='main__recent__header--heading'>Recent Comments</h3>
					<p className='main__recent__header--text'>24 new comments</p>
				</div>
			</div>
			<div className='main__recentcom__comments'>
				<CommentRow
					imgUser={user2}
					userDate='April 14, 2021'
					userName='James Anderson'
					userText='Lorem Ipsum is simply dummy text of the printing and type setting industry.'
					status='pending'
				/>
				<CommentRow
					imgUser={user3}
					userDate='May 14, 2021'
					userName='Michael Jorden'
					userText='Lorem Ipsum is simply dummy text of the printing and type setting industry.'
					status='approved'
				/>
				<CommentRow
					imgUser={user4}
					userDate='June 14, 2021'
					userName='Johnathan Doeting'
					userText='Lorem Ipsum is simply dummy text of the printing and type setting industry.'
					status='approved'
				/>
				<CommentRow
					imgUser={user}
					userDate='July 14, 2021'
					userName='Daniel Kristeen'
					userText='Lorem Ipsum is simply dummy text of the printing and type setting industry.'
					status='pending'
				/>

				<CommentRow
					imgUser={user5}
					userDate='Aug 14, 2021'
					userName='Jav Petrovic'
					userText='Lorem Ipsum is simply dummy text of the printing and type setting industry.'
					status='rejected'
				/>

				<CommentRow
					imgUser={user2}
					userDate='April 14, 2021'
					userName='Hanna Gover'
					userText='Lorem Ipsum is simply dummy text of the printing and type setting industry.'
					status='pending'
				/>

				<CommentRow
					imgUser={user3}
					userDate='April 14, 2021'
					userName='Andrew Mac'
					userText='Lorem Ipsum is simply dummy text of the printing and type setting industry.'
					status='approved'
				/>

				<CommentRow
					imgUser={user}
					userDate='April 14, 2021'
					userName='Robert Gover'
					userText='Lorem Ipsum is simply dummy text of the printing and type setting industry.'
					status='rejected'
				/>
			</div>
		</section>
	);
}
