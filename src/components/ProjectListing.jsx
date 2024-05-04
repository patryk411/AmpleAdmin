import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import user2 from '../assets/img/user2.jpg';
import projectListiningData from '../data/projectListiningData.json';

export default function ProjectListing() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(projectListiningData);
	}, []);

	return (
		<section className='main__projectlisting'>
			<div className='main__projectlisting__text'>
				<h3 className='main__projectlisting--heading'>Project Listing</h3>
				<p className='main__projectlisting--text'>Overview of the projects</p>
			</div>
			<div className='main__projectlisting__content'>
				<Table>
					<thead>
						<tr>
							<th>Team Lead</th>
							<th>Project</th>
							<th>Status</th>
							<th>Weeks</th>
							<th>Budget</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.map((project, index) => (
							<tr key={index}>
								<td>
									<div className='main__projectlisting__row'>
										<img className='main__projectlisting__content--img' src={project.img} alt='' />
										<div className='main__projectlisting__content__td'>
											<h5 className='main__projectlisting__content__td--name'>{project.name}</h5>
											<p className='main__projectlisting__content__td--email'>{project.email}</p>
										</div>
									</div>
								</td>
								<td>{project.projectName}</td>
								<td>
									<div
										className={`main__projectlisting__content__td--status ${
											project.projectStatus === 'good'
												? 'main__projectlisting__content__td--status-green'
												: project.projectStatus === 'warning'
												? 'main__projectlisting__content__td--status-warning'
												: ''
										}`}></div>
								</td>
								<td>{project.projectTime}</td>
								<td>{project.projectBudget}</td>
								<td>
									<button>
										<span className='material-icons'>edit</span>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</section>
	);
}
