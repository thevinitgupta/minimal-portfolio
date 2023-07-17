import Navbar from "@/components/navbar";

export default function Blog(){
    return (
        <main className={`flex min-h-screen flex-col items-center justify-start p-24`}
        >
            <Navbar active={3}></Navbar>
            <h1>Blog</h1>
        </main>
    );
}