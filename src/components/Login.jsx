import React, { useEffect, useState } from 'react';
import { BsShield } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Login() {
	const naviget = useNavigate();
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [error, setError] = useState('');
	const [msg, setMsg] = useState('');

	useEffect(() => {
		setTimeout(function () {
			setMsg('');
		}, 5000);
	}, [msg]);

	const handleInputChange = () => {
		const handleInputChange = (e, type) => {
			switch (type) {
				case 'user':
					setError('');
					setUser(e.target.value);
					if (e.target.value === '') {
						setError('Username has been left blank.');
					}
					break;
				case 'pass':
					setError('');
					setPass(e.target.value);
					if (e.target.value === '') {
						setError('Password has been left blank.');
					}
					break;
				default:
			}
		};
	};

	function loginSubmit() {
		if (user !== '' && pass !== '') {
			var url = 'http://localhost/react/login.php';
			var headers = {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			};
			var Data = {
				user: user,
				pass: pass,
			};
			fetch(url, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(Data),
			})
				.then((response) => response.json())
				.then((response) => {
					if (
						response[0].result === 'Invalid username!' ||
						response[0].result === 'Invalid password!'
					) {
						setError(response[0].result);
					} else {
						setMsg(response[0].result);
						setTimeout(function () {
							naviget('/dashboard');
						}, 5000);
					}
				})
				.catch((err) => {
					setError(err);
					console.log(err);
				});
		} else {
			setError('All fields are required.');
		}
	}
	return (
		<div className='flex items-center justify-center w-full my-16 h-[750px] bg-[#ecf0f3] mx-[36rem] rounded-3xl shadow-2xl'>
			<div className='flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<div className='flex items-center justify-center w-full'>
						<BsShield size={60} />
					</div>
					<h2 className='mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900'>
						Sign in to your account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<p>
						{error !== '' ? (
							<span className=' text-red-500'>{error}</span>
						) : (
							<span className='text-green-500'>{msg}</span>
						)}
					</p>
					<form className='space-y-6'>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Username
							</label>
							<div className='mt-2'>
								<input
									id='user'
									name='user'
									type='email'
									autoComplete='user'
									required
									className='block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									onChange={(e) => handleInputChange(e, 'user')}
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
								<div className='text-sm'>
									<a
										href='/forgot-password'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								onClick={loginSubmit}
							>
								Sign in
							</button>
						</div>
					</form>

					<p className='mt-10 text-sm text-center text-gray-500'>
						Not a member?{' '}
						<a
							href='/register'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Register for Free
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
