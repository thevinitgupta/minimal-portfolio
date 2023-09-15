import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

// import remark from 'remark';
// import html from 'remark-html';


export default function Blog({articles}) {
    const [top1, top2,top3,...others] = articles;
    const topBlogs = [top1,top2,top3];
    const blogs = others;
    
    return (
        <main className={`flex max-w-[100vw] flex-col items-center justify-start`}
        >
            <Navbar active={3}></Navbar>
            <div className={`flex flex-col w-full text-start px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32`}>
                <div className={`max-w-2xl mx-0`}>
                    <h2 className={`text-3xl font-bold tracking-tight text-zinc-100 sm:text-[2.5rem]`}>Blog</h2>
                    <p className={`mt-4 text-zinc-400`}>I also write technical jargon and document my journey.</p>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div className={`grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 `}>
                     <Card key={topBlogs[0].id} icons={topBlogs[0].tag_list} title={topBlogs[0].title} description={topBlogs[0].description} views={topBlogs[0].page_views_count} date={topBlogs[0].published_at} first={true} url={`/blog/${topBlogs[0].id}`}></Card>
                    <div className={`flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 `}>
                    {[topBlogs[1], topBlogs[2]].map((blog)=> <Card key={blog.id} icons={blog.tag_list} title={blog.title} views={blog.page_views_count} description={blog.description} date={blog.published_at} url={`/blog/${blog.id}`}></Card>)}
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div className={`grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3`}>
                    {
                    blogs.map((blog, index)=>{
                        return <Card key={blog.id} icons={blog.tag_list} views={blog.page_views_count} title={blog.title} description={blog.description} date={blog.published_at} url={`/blog/${blog.id}`}></Card>
                    })
                    }
                </div>
            </div>
        </main>
    );
}


const handleArticles = async () => {
    let markdown = null;
    const api_key = process.env.DEVTO_API_KEY;
    var myHeaders = new Headers();
    myHeaders.append("api-key", api_key);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://dev.to/api/articles/me", requestOptions)
        const result = await response.json();
        console.log("Blog result json ", result);
        const content = filterData(result);
        // console.log(content)
        return content;
//             // Use remark to convert Markdown to HTML
//   const processedContent = await remark().use(html).process(result.content);
//             const htmlContent = processedContent.toString();
//             setBlog(htmlContent);
//             setDisplay(true);
    }
    catch (error) { 
        console.log('error', error) 
        return [{}];
    }
};

const filterData = (articles)=>{
    const filtered = [];
    articles.sort((a,b)=> b.page_views_count-a.page_views_count)
    for(let i=0;i<articles.length;i++){
        const article = articles[i];
        let {id, title, description, body_markdown,  published_at, slug, url, page_views_count, tag_list, reading_time_minutes} = article;
        published_at = new Date(published_at).toDateString().substring(3);
        filtered.push({id, title, description, body_markdown, published_at, slug, url, page_views_count, tag_list, reading_time_minutes}); 
    }
    return filtered;
}

export const getStaticProps = async ()=>{
    const articles = await handleArticles();
    const source = articles[0].body_markdown;
    const mdxSource = await serialize(source);
    console.log(mdxSource);
    return {
        props : {
            articles
        }
    }
}