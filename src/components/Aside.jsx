import React from 'react';
import user from '../assets/img/user.jpg';
import home from '../assets/img/home.svg';
import calendar from '../assets/img/calendar.svg';
import notes from '../assets/img/notes.svg';
import person from '../assets/img/person.svg';
import table from '../assets/img/table.svg';
import AsideNavHeading from './AsideComponents/AsideNavHeading';
import AsideNavPageName from './AsideComponents/AsideNavPageName';

export default function Aside() {
	return (
		<aside className='aside'>
			<div className='aside__user'>
				<img className='aside__user--img' src={user} alt='' />
				<p className='aside__user--name'>John Deo</p>
			</div>
			<div className='separator'></div>
			<div className='aside__nav'>
				<div className='aside__box'>
					<AsideNavHeading titleNav='home' />
					<AsideNavPageName img={home} pageName='Dashboard' />
				</div>
				<div className='aside__box'>
					<AsideNavHeading titleNav='apps' />
					<AsideNavPageName img={notes} pageName='Notes' />
					<AsideNavPageName img={person} pageName='Contact' />
					<AsideNavPageName img={calendar} pageName='Calendar' />
					<AsideNavPageName img={table} pageName='Table' />
				</div>
			</div>
		</aside>
	);
}
