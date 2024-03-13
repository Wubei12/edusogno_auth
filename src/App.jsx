import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';

function App() {
	return (
		<>
			<NavBar />
			<div className='absolute flex justify-center w-full h-screen top-24'>
				<Routes>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
