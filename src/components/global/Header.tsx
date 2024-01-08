import Navbar from '@/components/global/Navbar'
import Link from 'next/link'

export default function Header() {
    return(
        <header className='flex align-center justify-between'>
            <Link href={"/"}><h1 className="text-orange-100">PIT RIVALS</h1></Link>
            <Navbar />
        </header>
    )
}