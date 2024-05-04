import React from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import TableRow from './RecentSalesComponents/TableRow';

export default function RecentSales() {
	return (
		<section className='main__recent col-lg-6'>
			<div className='main__recent__content'>
				<div className='main__recent__header'>
					<div className='main__recent__row'>
						<h3 className='main__recent__header--heading'>Recent Sales</h3>
						<p className='main__recent__header--text'>Check the sales table</p>
					</div>
					<Form.Select aria-label='Default select example'>
						<option selected>March 2022</option>
						<option value='1'>March 2021</option>
						<option value='2'>March 2020</option>
						<option value='3'>March 2019</option>
					</Form.Select>
				</div>
				<div className='main__recent__total'>
					<div className='main__recent__row'>
						<h3 className='main__recent__total--heading'>March 2017</h3>
						<p className='main__recent__total--text'>Sales Report</p>
					</div>
					<span className='main__recent__total--span'>$3,690</span>
				</div>
				<Table className='main__recent__table'>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Status</th>
							<th>Date</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<TableRow position='1' name='Elite admin' status='sale' date='April 18, 2017' price='$24' />
						<TableRow position='2' name='Real Homes WP Theme' status='extended' date='April 19, 2017' price='$1250' />
						<TableRow position='3' name='Ample Admin' status='extended' date='April 19, 2017' price='$1250' />
						<TableRow position='4' name='Medical Pro WP Theme' status='tax' date='April 19, 2017' price='-$24' />
						<TableRow position='5' name='Hosting press html' status='sale' date='April 19, 2017' price='$24' />
						<TableRow position='6' name='Digital Agency PSD' status='sale' date='April 19, 2017' price='-$24' />
						<TableRow position='7' name='Helping Hands WP Theme' status='member' date='April 19, 2017' price='$64' />
					</tbody>
				</Table>
			</div>
		</section>
	);
}
