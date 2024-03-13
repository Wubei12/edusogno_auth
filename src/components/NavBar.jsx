import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	const [shadow, setShadow] = useState(false);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);
	return (
		<div
			className={
				shadow
					? 'fixed z-[999] top-0 transition-all duration-300 flex items-center justify-between w-full h-24 px-12 bg-gray-400 shadow-2xl'
					: 'fixed z-[999] top-0 transition-all duration-300 flex items-center justify-between w-full h-24 px-12 bg-transparent'
			}
		>
			<h1 className='text-3xl font-bold'>Edusogno</h1>

			<div>
				<ul className='flex gap-12'>
					<li className='px-4 py-2 font-bold text-md'>
						<Link to='/login'>Login</Link>
					</li>
					<li className='px-4 py-2 font-bold transition-all border-2 border-indigo-500 rounded-md cursor-pointer text-md hover:text-white hover:bg-indigo-500'>
						<Link to='/register'>Register</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
