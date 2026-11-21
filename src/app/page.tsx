import Link from 'next/link';
import SaintLogo from '@/components/ui/SaintLogo';
import { ArrowRightIcon } from 'lucide-react';
export default function Home() {
	return (
		<main className='flex flex-col min-h-screen p-6'>
			<div className=' flex shrink-0 items-center h-19 bg-blue-500 rounded-lg md:h-30'>
				<SaintLogo />
			</div>
			<div className='mt-4 flex flex-col bg-gray-50 rounded-lg items-center justify-center gap-6 px-6 py-10 md:w-2/5 md:px-20'>
				<p className='text-gray-600 text-xl md:text-3xl md:leading-normal'>
					Welcome to Saint Org
				</p>
				<Link
					href='/login'
					className='font-medium gap-5 text-sm px-6 py-3 flex self-start bg-blue-500 rounded-lg transition-colors hover:bg-blue-400 md:text-base'
				>
					<span>Log in</span>
					<ArrowRightIcon className='w-5 md:w-6' />
				</Link>
			</div>
		</main>
	);
}
