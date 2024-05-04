import React from 'react';
import chart from '../assets/img/chart.svg';
import chart2 from '../assets/img/chart2.svg';
import chart3 from '../assets/img/chart3.svg';
import chart4 from '../assets/img/chart4.svg';
import DailyInfoBox from './DashboardHomeComponents/DailyInfoBox';

export default function DailyInfo() {
	return (
		<section className='main__daily'>
			<div className='main__daily__content row m-0 p-0'>
				<DailyInfoBox title='Total Visit' img={chart} count='659' />
				<DailyInfoBox title='Total Page Views' img={chart2} count='358' />
				<DailyInfoBox title='Unique Visitor' img={chart3} count='781' />
				<DailyInfoBox title='Bounce Rate' img={chart4} count='659' />
			</div>
		</section>
	);
}
