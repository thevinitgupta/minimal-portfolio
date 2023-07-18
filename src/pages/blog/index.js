import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Card from "@/components/card";

// import remark from 'remark';
// import html from 'remark-html';


export default function Blog({articles}) {
   
    console.log(articles);
    const [top1, top2, top3, ...blogs] = articles;
    const topBlogs = [top1, top2, top3];
    
    return (
        <main className={`flex min-w-[100vw] flex-col items-center justify-start`}
        >
            <Navbar active={3}></Navbar>
            <div className={`flex flex-col w-full text-start px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32`}>
                <div className={`max-w-2xl mx-0`}>
                    <h2 className={`text-3xl font-bold tracking-tight text-zinc-100 sm:text-[2.5rem]`}>Blogs</h2>
                    <p className={`mt-4 text-zinc-400`}>I also write technical jargon and document my journey.</p>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div className={`grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 `}>
                    <Card key={topBlogs[0].id} icons={topBlogs[0].tag_list} title={topBlogs[0].title} description={topBlogs[0].description} date={topBlogs[0].published_at} first={true} url={topBlogs[0].url}></Card>
                    <div className={`flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 `}>
                    {[topBlogs[1], topBlogs[2]].map((blog)=> <Card key={blog.id} icons={blog.tag_list} title={blog.title} description={blog.description} date={blog.published_at} url={blog.url}></Card>)}
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div className={`grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3`}>
                    {
                    blogs.map((blog, index)=>{
                        return <Card key={blog.id} icons={blog.tag_list} title={blog.title} description={blog.description} date={blog.published_at} url={blog.url}></Card>
                    })
                    }
                </div>
            </div>
        </main>
    );
}

export async function getStaticProps() {
    try {

        const data = await fetch("http://localhost:3000/api/articles");
        const articles = await data.json();
  
        return {
            props: {
            articles,
            },
        };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return {
        props: {
          articles: [],
        },
      };
    }
  }