import Card from "@/components/card";
import Navbar from "@/components/navbar";

export default function Projects(){
    return (
        <main className={`flex min-w-[100vw] flex-col items-center justify-start`}
        >
            <Navbar active={1}></Navbar>
            
            <div className={`flex flex-col w-full text-start px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32`}>
                <div className={`max-w-2xl mx-auto lg:mx-0`}>
                    <h2 className={`text-3xl font-bold tracking-tight text-zinc-100 sm:text-[2.5rem]`}>Projects</h2>
                    <p className={`mt-4 text-zinc-400`}>Some of the projects I have done in my free time and contributed to.</p>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div className={`grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 `}>
                    <Card icon="/react.svg"></Card>
                    <div className={`flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 `}>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>

            </div>

        </main>
    );
}