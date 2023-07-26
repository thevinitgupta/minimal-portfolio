import Navbar from "@/components/navbar";
import {SlSocialLinkedin} from "react-icons/sl"

export default function Contact() {
    return (
        <main className={`flex min-h-screen max-w-screen flex-col items-center justify-start p-10 sm:p-24`}
        >
            <Navbar active={4}>   </Navbar>
            <div className={`flex-1 w-full flex justify-center items-center`}>
                <div className="w-full flex flex-col justify-start md:justify-center items-center gap-8 mx-auto mt-6  md:flex-row lg:gap-16">
                    <div className="overflow-hidden min-w-full md:min-w-[280px] relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
                        <div className="pointer-events-none">
                            <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]">   </div>
                            <div className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 " style={{ maskImage: "radial-gradient(240px at 451px 278.5px, white, transparent);" }}>   </div>
                            <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={{ maskImage: "radial-gradient(240px at 451px 278.5px, white, transparent);" }}>   </div>
                        </div>
                        <a target="_blank" className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16" href="https://www.linkedin.com/in/thevinitgupta/">
                            <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true">   </span>
                            <span className="relative z-10 flex items-center justify-center w-12 h-12  duration-1000 border rounded-full text-zinc-200 text-lg group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">   
                                <SlSocialLinkedin/>
                               </span>       <div className="z-10 flex flex-col items-center">      <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">      @thevinitgupta</span>      <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                LinkedIn</span>
                            </div>
                        </a>
                    </div>
                    <div className="overflow-hidden  min-w-full md:min-w-[280px] relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
                        <div className="pointer-events-none">      <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                            <div className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 " style={{ maskImage: "radial-gradient(240px at 419.333px 310.5px, white, transparent);" }}></div>
                            <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={{ maskImage: "radial-gradient(240px at 419.333px 310.5px, white, transparent);" }}>
                            </div>
                        </div>
                        <a target="_blank" className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16" href="mailto:thevinitgupta@gmail.com">
                            <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true"></span>

                            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </span>

                            <div className="z-10 flex flex-col items-center">

                                <span className="text-md font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">thevinitgupta@gmail.com</span>

                                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">Email</span>
                            </div>
                        </a>
                    </div>

                    <div className="overflow-hidden  min-w-full md:min-w-[280px] relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">   <div className="pointer-events-none">   <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]">   </div>   <div className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 " style={{ maskImage: "radial-gradient(240px at 207.667px 440.5px, white, transparent);" }}>   </div>   <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={{ maskImage: "radial-gradient(240px at 207.667px 440.5px, white, transparent);" }}>   </div>   </div>   <a target="_blank" className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16" href="https://github.com/thevinitgupta">   <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true">   </span>   <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">   <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">   </path>   <path d="M9 18c-4.51 2-5-2-7-2">   </path>   </svg>   </span>    <div className="z-10 flex flex-col items-center">   <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">   thevinitgupta</span>   <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">   Github</span>   </div>   </a>   </div>   </div>
            </div>
        </main>
    );
}