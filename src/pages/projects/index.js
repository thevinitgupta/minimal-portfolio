import Navbar from "@/components/navbar";

export default function Projects(){
    return (
        <main className={`flex min-w-[100vw] flex-col items-center justify-start`}
        >
            <Navbar active={1}></Navbar>
            
            <div className={`h-[150vh] text-5xl px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32`}>This is a big text</div>
        </main>
    );
}