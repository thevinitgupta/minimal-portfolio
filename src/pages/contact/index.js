import Navbar from "@/components/navbar";

export default function Contact(){
    return (
        <main className={`flex min-h-screen flex-col items-center justify-start p-24`}
        >
            <Navbar active={4}></Navbar>
            <h1>Contact</h1>
        </main>
    );
}