import Link from 'next/link'

export default function Navbar({active}){

    return (
        <nav className={`min-w-full flex justify-between items-center fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/500  border-zinc-800 py-5 px-2 md:px-24`}>
            <a className={`mr-2`} href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            </a>
            <div className={`flex gap-6 text-base md:text-lg font-Mono text-gray-400`}>
            <Link href={`/projects`} className={`${active==1 && 'text-gray-200'} hover:text-gray-200 cursor-pointer`}>Projects</Link>
          <Link href={`/experience`} className={`${active==2 && 'text-gray-200'} hover:text-gray-200 cursor-pointer`}>Experience</Link>
          <Link href={`/blog`} className={`${active==3 && 'text-gray-200'} hover:text-gray-200 cursor-pointer`}>Blog</Link>
          <Link href={`/contact`} className={`${active==4 && 'text-gray-200'} hover:text-gray-200 cursor-pointer`}>Contact</Link>
            </div>
        </nav>
    );
}