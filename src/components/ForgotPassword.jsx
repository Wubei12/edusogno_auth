import React, { useState } from 'react';

function ForgotPassword() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Send email for password reset
		// You can implement your logic here
		setMessage(`Password reset instructions have been sent to ${email}`);
		setEmail('');
	};
	return (
		<div className='flex flex-col justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
					Forgot your password?
				</h2>
				<p className='mt-2 text-sm text-center text-gray-600'>
					Enter your email and we'll send you a password reset link.
				</p>
			</div>

			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
				<div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
					<form
						className='space-y-6'
						onSubmit={handleSubmit}
					>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'
							>
								Email address
							</label>
							<div className='mt-1'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									required
									value={email}
									onChange={handleEmailChange}
									className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Send reset instructions
							</button>
						</div>

						{message && (
							<div className='mt-2 text-sm text-center text-gray-600'>
								{message}
							</div>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}

export default ForgotPassword;
