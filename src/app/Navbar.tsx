'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path';

import { DarkModeToggler } from '@/components/dark-mode-toggler'

interface MenuItem {
    url: string;
    title: string;
    hasInnerNav?: boolean;
}

const mainMenu: MenuItem[] = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/demos",
        title: "Demos",
        hasInnerNav: true,
    },
    {
        url: "/about",
        title: "About"
    },
]

export default function Navbar() {
    const pathname = usePathname()
    const linkClasses = 'flex items-center h-16 px-8 py-2 text-md font-medium hover:bg-gray-900 '
    const linkActiveClasses = ' bg-background dark:bg-background text-violet-700'

    return (
        <nav className="bg-violet-700">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center w-full">
                        <div className="flex-shrink-0 pl-2 pr-4">
                            <h1 className='text-4xl text-white extrabold'>nextamin</h1>
                        </div>

                        <div className="hidden w-full md:block">
                            <div className="flex items-baseline ">
                                {mainMenu.map((i: MenuItem) => (
                                    <Link key={`menu-${i.url}`} href={i.url} className={linkClasses + (pathname === i.url || (i.hasInnerNav && pathname.startsWith(i.url)) ? linkActiveClasses : ' text-white')} aria-current="page">{i.title}</Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <DarkModeToggler />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}