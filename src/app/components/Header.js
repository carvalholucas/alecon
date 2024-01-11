"use client";

import { useState } from "react";
import Image from "next/image";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { MenuLinks } from "data";

const Header = () => {
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	return (
		<header className="bg-blue-900 fixed w-full z-20">
			<div className="container mx-auto px-8">
				<div className="flex items-center justify-between w-full h-[100px]">
					<Image
						src="/alecon_logo.png"
						width={200}
						height={46}
						quality={100}
						alt="Logo Alecon"
					/>

					<Bars3Icon
						className="h-10 w-10 text-yellow-900 lg:hidden"
						onClick={() => setMenuIsVisible((prev) => !prev)}
					/>

					{menuIsVisible && (
						<div className="fixed h-[calc(100vh-80px)] w-full left-0 bottom-0 bg-yellow-900 p-8 text-center lg:hidden">
							<ul>
								{MenuLinks.map((link) => (
									<a
										key={link.id}
										className="block mb-10 font-medium text-gray-900"
										href={link.href}
									>
										{link.cta ? (
											<li className="bg-yellow-900 py-2 px-4 rounded-md text-white">
												{link.name}
											</li>
										) : (
											<li>{link.name}</li>
										)}
									</a>
								))}
							</ul>
						</div>
					)}

					<nav className="hidden lg:inline">
						<ul>
							{MenuLinks.map((link) => (
								<a
									key={link.id}
									className="inline-block ml-12 font-normal text-sm text-white hover:text-yellow-900 hover:font-normal"
									href={link.href}
								>
									{link.cta ? (
										<li className="bg-yellow-900 py-2 px-4 rounded-md text-black">
											{link.name}
										</li>
									) : (
										<li>{link.name}</li>
									)}
								</a>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
