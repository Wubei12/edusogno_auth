import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
	const naviget = useNavigate();

	function logout() {
		naviget('/');
	}

	return (
		<div>
			<h1>Dashboard Page</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
}

export default Dashboard;
