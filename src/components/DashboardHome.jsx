import React from 'react';

export default function DashboardHome() {
	return (
		<section className='main__dashboard'>
			<h4 className='main__dashboard--heading'>Dashboard</h4>
			<p className='main__dashboard--text'>
				<span className='main__dashboard--span'>Home</span>
				<span className='main__dashboard--separator'>/</span>
				<span>Dashboards</span>
			</p>
		</section>
	);
}
