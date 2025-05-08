'use client';

import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export const Header = () => {
	const { userId } = useAuth();
	return (
		<header className="pt-4 flex items-center justify-center gap-4 ">
			<nav>
				<ul className="flex items-center justify-center gap-4">
					<li>
						<Link
							href="/"
							className="capitalize hover:underline hover:text-sky-500"
						>
							home
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="capitalize hover:underline hover:text-sky-500"
						>
							about
						</Link>
					</li>
				</ul>
			</nav>
			<div>
				{userId && (
					<div className="flex items-center justify-center mr-2 lg:mr-0">
						<UserButton />
					</div>
				)}
			</div>
		</header>
	);
};
