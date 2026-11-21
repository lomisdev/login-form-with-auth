import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export default function Button({
	children,
	className,
	...buttonProps
}: ButtonProps) {
	return (
		<button
			{...buttonProps}
			className={clsx(
				'flex items-center justify-center h-10 bg-blue-500 rounded-lg font-medium px-4 text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible: outline-offset-2 focus-visible: outline-blue-500 active:bg-blue-500 aria-disabled: cursor-not-allowed aria-disabled: opacity-50',
				className,
			)}
		>
			{children}
		</button>
	);
}
