import React from 'react';

export default function AsideNavPageName({ img, pageName }) {
	return (
		<a className='aside__content' href=''>
			<div className='aside__onside'>
				<img src={img} alt='' />
				<h4 className='aside__onside--heading'>{pageName}</h4>
			</div>
			<div className='aside__inside'>
				6<span class='material-icons'>chevron_right</span>
			</div>
		</a>
	);
}
