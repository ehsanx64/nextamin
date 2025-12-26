'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItem {
    url: string;
    title: string;
}

const mainMenu: MenuItem[] = [
    {
        url: "/demos/playground",
        title: "Playground"
    },
    {
        url: "/demos/counter",
        title: "Counter"
    },
    {
        url: "/demos/form",
        title: "Form"
    },
    {
        url: "/demos/axios",
        title: "Axios"
    },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="bg-secondary w-64">
            <ul className="block w-full">
                {mainMenu.map((i: MenuItem) => (
                    <li key={`menu-${i.url}`} >
                        <Link key={`menu-${i.url}`} href={i.url} className={"px-3 py-2 text-md font-medium hover:bg-violet-200 block" + (pathname === i.url ? ' bg-violet-700 text-white hover:bg-violet-700 hover:text-black' : '')} aria-current="page">{i.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}