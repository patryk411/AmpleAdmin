import React from 'react';

export default function Input({ label, id, ...props }) {
	return (
		<div className='form-group col-6'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} />
		</div>
	);
}
