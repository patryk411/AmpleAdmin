// import React, { useEffect, useRef } from 'react';
// import { createPortal } from 'react-dom';

// export default function Modal({ children, open, onClose }) {
// 	const dialog = useRef();

// 	useEffect(() => {
// 		const modal = dialog.current;

// 		if (open) {
// 			modal.showCheckout();
// 		}

// 		return () => modal.close();
// 	}, [open]);

// 	return createPortal(
// 		<div className='dialog' ref={dialog} onClose={onClose}>
// 			{children}
// 		</div>,
// 		document.getElementById('modal')
// 	);
// }
