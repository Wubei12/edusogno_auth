import React, { useEffect, useState } from 'react';
import { BsShield } from 'react-icons/bs';

function Register() {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [pass1, setPass1] = useState('');
	const [pass2, setPass2] = useState('');
	const [error, setError] = useState('');
	const [msg, setMsg] = useState('');

	useEffect(() => {
		setTimeout(function () {
			setMsg('');
		}, 15000);
	}, [msg]);

	const handleInputChange = (e, type) => {
		switch (type) {
			case 'user':
				setError('');
				setUser(e.target.value);
				if (e.target.value === '') {
					setError('Username has been left blank.');
				}
				break;
			case 'email':
				setError('');
				setEmail(e.target.value);
				if (e.target.value === '') {
					setError('Email has been left blank.');
				}
				break;
			case 'pass1':
				setError('');
				setPass1(e.target.value);
				if (e.target.value === '') {
					setError('Password has been left blank.');
				}
				break;
			case 'pass2':
				setError('');
				setPass2(e.target.value);
				if (e.target.value === '') {
					setError('Confirm Password has been left blank.');
				} else if (e.target.value !== pass1) {
					setError('Passwords do not match.');
				}
				break;
			default:
		}
	};

	function handleSubmit() {
		if (user !== '' && email !== '' && pass1 !== '' && pass2 !== '') {
			var url = 'http://localhost/react/registration.php';
			var headers = {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			};
			var Data = {
				user: user,
				email: email,
				pass: pass2,
			};
			fetch(url, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(Data),
			})
				.then((res) => res.json())
				.then((response) => {
					setMsg(response[0].result);
				})
				.catch((err) => {
					setError(err);
					console.log(err);
				});
			setUser('');
			setEmail('');
			setPass1('');
			setPass2('');
		} else {
			setError('All fields must be provided.');
		}
	}

	function checkUser() {
		var url = 'http://localhost/react/checkuser.php';
		var headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		};
		var Data = {
			user: user,
		};
		fetch(url, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(Data),
		})
			.then((res) => res.json())
			.then((res) => {
				setError(res[0].result);
			})
			.catch((err) => {
				setError(err);
				console.log(err);
			});
	}

	function checkEmail() {
		var url = 'http://localhost/react/checkemail.php';
		var headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		};
		var Data = {
			email: email,
		};
		fetch(url, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(Data),
		})
			.then((res) => res.json())
			.then((res) => {
				setError(res[0].result);
			})
			.catch((err) => {
				setError(err);
				console.log(err);
			});
	}

	function checkPassword() {
		if (pass1.length < 8) {
			setError('Password must be at least 8 characters!');
		}
	}
	return (
		<div className='flex items-center justify-center w-full my-16 h-[750px] bg-[#ecf0f3] mx-[36rem] rounded-3xl shadow-2xl'>
			<div className='flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8'>
				<p>
					{msg !== '' ? (
						<span className='text-green-500'>{msg}</span>
					) : (
						<span className='text-red-500'>{error}</span>
					)}
				</p>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<div className='flex items-center justify-center w-full'>
						<BsShield size={60} />
					</div>
					<h2 className='mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900'>
						Register for an account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6'>
						<div>
							<label
								htmlFor='full_name'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Full Name
							</label>
							<div className='mt-2'>
								<input
									id='user'
									name='user'
									value={user}
									type='text'
									autoComplete='user'
									required
									className='block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									onChange={(e) => handleInputChange(e, 'user')}
									onBlur={checkUser}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Email address
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									value={email}
									type='email'
									autoComplete='email'
									required
									className='block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									onChange={(e) => handleInputChange(e, 'email')}
									onBlur={checkEmail}
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Password
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									value={pass1}
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									onChange={(e) => handleInputChange(e, 'pass1')}
									onBlur={checkPassword}
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Confirm Password
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='password2'
									name='password2'
									value={pass2}
									type='password'
									autoComplete='current-password2'
									required
									className='block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									onChange={(e) => handleInputChange(e, 'pass2')}
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								onClick={handleSubmit}
							>
								Register
							</button>
						</div>
					</form>

					<p className='mt-10 text-sm text-center text-gray-500'>
						Already a member?{' '}
						<a
							href='/login'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Sign in
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Register;
