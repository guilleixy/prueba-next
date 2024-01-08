//required for usePathname
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import UserBox from "./UserBox";

export default function Navbar() {
    //info about the current path (url)
    const pathname = usePathname()
    return(
        <nav>
            <ul className="flex align-center">
                <li>TOURNAMENTS</li>
                <li>
                    <Link 
                    //hay que especificar los text-orange y white y poner 100, 200, etc
                        className={`${pathname === '/hall-of-fame' ? 'text-orange' : 'text-white'}`} 
                        href={'/hall-of-fame'}>
                        HALL OF FAME
                    </Link>
                </li>
                <li><UserBox /></li>
            </ul>
        </nav>
    )
}