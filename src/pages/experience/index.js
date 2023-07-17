import Navbar from "@/components/navbar";

export default function Experience(){
    return (
        <main className={`flex min-h-screen flex-col items-center justify-start p-24`}
        >
            <Navbar active={2}></Navbar>
            <h1>Experience</h1>
        </main>
    );
}