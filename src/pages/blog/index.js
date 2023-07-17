import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import remark from 'remark';
import html from 'remark-html';


export default function Blog() {
    const [display, setDisplay] = useState(false);
    const [blog, setBlog] = useState("");

    const handleFetching = async () => {
        let markdown = null;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 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");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        try {
            const response = await fetch("https://api.github.com/repos/thevinitgupta/RespondAI/contents/README.md", requestOptions)
            const result = await response.json();
            const content = atob(result.content);
            console.log(content);
            // Use remark to convert Markdown to HTML
  const processedContent = await remark().use(html).process(result.content);
            const htmlContent = processedContent.toString();
            setBlog(htmlContent);
            setDisplay(true);
        }
        catch (error) { 
            console.log('error', error) 
            setDisplay(false);
        }
    };
    

    useEffect(() => {
        handleFetching();
    }, [])
    return (
        <main className={`flex min-h-screen flex-col items-center justify-start p-24`}
        >
            <Navbar active={3}></Navbar>
            <h1>Blog</h1>
            {display &&
                <div dangerouslySetInnerHTML={{ __html: blog }} />}
        </main>
    );
}