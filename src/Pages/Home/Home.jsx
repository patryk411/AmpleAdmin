import React from 'react';
import Navigation from '../../components/Nav.jsx';
import Aside from '../../components/Aside.jsx';
import DashboardHome from '../../components/DashboardHome.jsx';
import { Container } from 'react-bootstrap';
import DailyInfo from '../../components/DailyInfo.jsx';
import MonthlyViewRaport from '../../components/MonthlyViewRaport.jsx';
import Recent from '../../components/Recent.jsx';
import Tasks from '../../components/Tasks.jsx';
import ProjectListing from '../../components/ProjectListing.jsx';

export default function Home() {
	return (
		<div className='home'>
			<Navigation />
			<div className='d-flex flex-row'>
				<div className='col-2'>
					<Aside />
				</div>
				<main className='main col-10'>
					<Container>
						<DashboardHome />
						<DailyInfo />
						<MonthlyViewRaport />
						<Recent />
						<Tasks />
						<ProjectListing />
					</Container>
				</main>
			</div>
		</div>
	);
}
