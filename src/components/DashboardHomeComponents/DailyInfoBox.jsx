import React from 'react';

export default function DailyInfoBox({ title, img, count }) {
	return (
		<div className='main__daily__box col-md-5 col-lg'>
			<h3 className='main__daily__box--heading'>{title}</h3>
			<div className='main__daily__img'>
				<img className='main__daily__img--img' src={img} alt='' />
				<div
					className={`main__daily__text ${
						title === 'Total Page Views'
							? 'main__daily__text2'
							: title === 'Unique Visitor'
							? 'main__daily__text3'
							: title === 'Bounce Rate'
							? 'main__daily__text4'
							: ''
					}`}>
					<span class='material-icons'>north</span> <span className='main__daily__span'>{count}</span>
				</div>
			</div>
		</div>
	);
}
