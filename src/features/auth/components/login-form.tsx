'use client';

import Button from '@/components/ui/button';
import { lusitana } from '@/components/ui/fonts';
import { ArrowRightIcon, AtSign, KeyRound } from 'lucide-react';

export default function LoginForm() {
	return (
		<form className='space-y-3'>
			<div className='bg-gray-50 text-gray-600 flex-1 px-6 pb-4 pt-8 rounded-lg'>
				<h1 className={`${lusitana.className} mb-4 text-2xl`}>
					Please log in to continue
				</h1>

				<div className='w-full'>
					<label
						className='mb-3 mt-5 block text-sm font-medium text-slate-700'
						htmlFor='email'
					>
						Email
					</label>
					<div className='relative'>
						<input
							className='peer w-full block border border-gray-200 rounded-md py-2 pl-10 outline-2 text-sm'
							type='email'
							name='email'
							id='email'
							placeholder='Enter your email address'
							required
						/>
						<AtSign
							strokeWidth='1.9'
							className='absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 peer-focus: text-gray-900'
						/>
					</div>
				</div>
				<div className='w-full'>
					<label
						className='mb-3 mt-5 block text-sm font-medium text-slate-700'
						htmlFor='password'
					>
						Password
					</label>
					<div className='relative'>
						<input
							className='peer w-full block border border-gray-200 rounded-md py-2 pl-10 outline-2 text-sm'
							type='password'
							name='password'
							id='password'
							placeholder='Enter your password '
							required
							minLength={6}
						/>
						<KeyRound
							strokeWidth='1.9'
							className='absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 peer-focus: text-gray-900'
						/>
					</div>
				</div>
				<Button className='w-full mt-5'>
					Log in
					<span>
						<ArrowRightIcon className='ml-auto h-5 w-5 text-gray-50' />
					</span>
				</Button>
			</div>
		</form>
	);
}
