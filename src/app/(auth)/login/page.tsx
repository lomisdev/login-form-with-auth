import SaintLogo from '@/components/ui/SaintLogo';
import LoginForm from '@/features/auth/components/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
	return (
		<main className='flex items-center justify-center md:h-screen'>
			<div className='flex flex-col space-y-2.5 relative w-full max-w-100 mx-auto p-4 md:-mt-32'>
				<div className='bg-blue-500 rounded-lg h-20 flex items-center  md:h-30'>
					<SaintLogo />
				</div>

				<Suspense>
					<LoginForm />
				</Suspense>
			</div>
		</main>
	);
}
