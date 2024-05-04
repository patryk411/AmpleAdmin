import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgBg from '../assets/img/imgBg.svg';
import imgBg1 from '../assets/img/imgBg1.svg';
import bars from '../assets/img/bars.svg';
import blocks from '../assets/img/blocks.svg';
import envelop from '../assets/img/envelop.svg';
import message from '../assets/img/message.svg';
import user from '../assets/img/user.jpg';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navigation = [
	{ name: 'Home', href: '/', current: true, img: bars },
	{ name: 'Services', href: '/services', current: false, img: message },
	{ name: 'Messages', href: '/messages', current: false, img: envelop },
	{ name: 'Features', href: '/features', current: false, img: blocks },
];

export default function Navigation() {
	return (
		<Navbar expand='lg'>
			<Container fluid>
				<Navbar.Brand>
					<Link to='/'>
						<img src={imgBg1} alt='' />
						<img className='navbar-brand-img' src={imgBg} alt='' />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-start'>
						{navigation.map((item, index) => (
							<Nav.Link key={index} name={item.name} href={item.href}>
								{item.img ? <img className='header-img' src={item.img} alt='' /> : item.name}
							</Nav.Link>
						))}
					</Nav>
					<Form>
						<Form.Control placeholder='Search' aria-label='Username' aria-describedby='basic-addon1' />
						<button className='btn user-img-btn'>
							<img className='user-img' src={user} alt='' />
						</button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
