import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Octokit } from "@octokit/core";

// import remark from 'remark';
// import html from 'remark-html';


export default function DaysOfLearning({ project }) {

    return (
        <main className={`flex max-w-[100vw] flex-col items-center justify-start`}>
            <Navbar></Navbar>
            <div className={`flex flex-col w-full px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32`}>
                
                <div className={'prose prose-p:text-lg prose-headings:text-white prose-strong:text-white prose-p:text-slate-300 prose-code:text-green-600 prose-img:rounded-md prose-li:text-slate-400 prose-td:text-slate-400 prose-a:text-sky-700 max-w-full'} >
                    <MDXRemote {...project} />
                </div>
            </div>
        </main>
    )
}

const fetchPost = async (project,day) => {
    var myHeaders = new Headers();
    const accessToken = process.env.GITHUB_ACCESS_TOKEN;


    try {

        const octokit = new Octokit({
            auth: accessToken
        })

        const resp = await octokit.request(`GET /repos/thevinitgupta/${project}/contents/${day}.md`, {
            owner: 'OWNER',
            repo: 'REPO',
            path: 'PATH',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        const base64Content = resp.data.content;
        const decodedContent = Buffer.from(base64Content, 'base64').toString('utf-8');
        // console.log(decodedContent);
        let mdxSource = "";
        // if (body !== "404: Not Found") {
        mdxSource = await serialize(decodedContent);
        // }
        // console.log("body : ", "404: Not Found" === body)
        return mdxSource;
    }
    catch (error) {
        console.log('error', error)
        return String(error);
    }
}


export const getStaticProps = async (context) => {
    const day = context.params.day;
    const project = await fetchPost("100-Days-of-Learning", day);
    return {
        props: {
            project
        }
    }
}

export const getStaticPaths = () => {
    return { paths: [], fallback: 'blocking' }
}
