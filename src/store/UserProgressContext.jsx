import React, { useState } from 'react';
import { createContext } from 'react';

const UserProgressContext = createContext({
	progress: '',
	showCheckout: () => {},
	hideCheckout: () => {},
	showModalDialog: () => {},
	hideModalDialog: () => {},
});

export function UserProgressContextProvider({ children }) {
	const [userProgress, setUserProgress] = useState('');

	function showCheckout() {
		setUserProgress('checkout');
	}

	function hideCheckout() {
		setUserProgress('');
	}

	function showModalDialog() {
		setUserProgress('modaldialog');
	}

	function hideModalDialog() {
		setUserProgress('');
	}

	const userProgressCtx = {
		progress: userProgress,
		showCheckout,
		hideCheckout,
		showModalDialog,
		hideModalDialog,
	};

	return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>;
}

export default UserProgressContext;
