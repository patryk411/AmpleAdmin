import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ModalReal({ children, open, onClose }) {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;

		if (open) {
			modal.showModal();
		}

		return () => modal.close();
	}, [open]);

	return createPortal(
		<dialog ref={dialog} className='modalreal' onClose={onClose}>
			{children}
		</dialog>,
		document.getElementById('modal')
	);
}
