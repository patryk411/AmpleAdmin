import React from 'react';
import ProductSalesChart from './ProductSalesChart';
import MonthlyEarnings from './MonthlyEarnings';

export default function MonthlyViewRaport() {
	return (
		<div className='monthlyraport'>
			<ProductSalesChart />
			<MonthlyEarnings />
		</div>
	);
}
