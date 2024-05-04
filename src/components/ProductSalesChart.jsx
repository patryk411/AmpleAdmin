import React from 'react';
import { Chart as ChartJS, Legend, defaults } from 'chart.js/auto';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

defaults.responsive = true;
defaults.color = '#fff';

export default function ProductSalesChart() {
	const config = {
		options: {
			scales: {
				x: {
					ticks: {
						color: ['rgb(236, 64, 122)'],
					},
				},
			},
		},
	};
	return (
		<section className='main__chart col-8'>
			<h3 className='main__chart--heading'>Products Monthly Sales</h3>
			<p className='main__chart--text'>Check the data</p>
			<Line
				data={{
					labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
					datasets: [
						{
							label: 'Mac',
							data: [5, 1, 7, 4, 5, 3, 5, 4],
							borderColor: '#e6e9ecbf',
							backgroundColor: '#e6e9ecbf',
							fill: { above: '#e6e9ec26', below: '#2cabe3', target: { value: 0 } },
						},
						{
							label: 'Windows',
							data: [1, 5, 1, 6, 1, 5, 1, 3],
							borderColor: '#2cabe3',
							backgroundColor: '#2cabe3',
							fill: { above: '#2cace369', below: '#e6e9ecbf', target: { value: 0 } },
						},
					],
				}}
				options={{
					elements: {
						line: {
							tension: 0.3,
						},
					},
				}}
			/>
		</section>
	);
}
