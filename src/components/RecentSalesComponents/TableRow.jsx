import React from 'react';

export default function TableRow({ position, name, status, date, price }) {
	return (
		<tr>
			<td>{position}</td>
			<td>{name}</td>
			<td>
				<span
					className={`${
						status === 'sale'
							? 'status-sale'
							: status === 'extended'
							? 'status-extended'
							: status === 'tax'
							? 'status-tax'
							: status === 'member'
							? 'status-member'
							: ''
					}`}>
					{status}
				</span>
			</td>
			<td>{date}</td>
			<td>
				<span className='price'>{price}</span>
			</td>
		</tr>
	);
}
