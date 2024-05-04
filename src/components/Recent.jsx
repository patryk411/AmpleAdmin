import React from 'react';
import RecentSales from './RecentSales';
import RecentComments from './RecentComments';

export default function Recent() {
	return (
		<div className='monthlyraport'>
			<RecentSales />
			<RecentComments />
		</div>
	);
}
