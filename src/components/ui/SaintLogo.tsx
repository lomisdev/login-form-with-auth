import { ShieldExclamationPointIcon } from 'lucide-react';
import { lusitana } from './fonts';
export default function SaintLogo() {
	return (
		<div
			className={` ${lusitana.className} flex flex-row items-center leading-none text-white`}
		>
			<ShieldExclamationPointIcon className='h-12 w-12 rotate-6 md:h-20 md:w-24' />
			<p className='text-[44px]'>Saint org</p>
		</div>
	);
}
