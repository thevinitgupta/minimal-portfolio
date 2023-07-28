import { useRouter } from 'next/router'
import Navbar from "@/components/navbar";
import md from 'markdown-it';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';


export default function Project({ project }) {
    const router = useRouter();
    console.log(router.query,project, "404: Not Found"===project);
        return (
            <main className={`flex max-w-[100vw] flex-col items-center justify-start`}>
                <Navbar></Navbar>
                <div className={`flex flex-col w-full px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32`}>
                    <div className={`max-w-full mx-0`}>
                        <h2 className={`text-3xl font-bold tracking-tight text-zinc-100 sm:text-[2.5rem]`}>{router?.query?.slug}</h2>
                    </div>
                    <div className="w-full h-px bg-zinc-800"></div>
                    <div className={'prose prose-p:text-lg prose-headings:text-white prose-strong:text-white prose-p:text-slate-300 prose-code:text-green-600 prose-img:rounded-md prose-li:text-slate-400 prose-a:text-sky-700 max-w-full'} dangerouslySetInnerHTML={{ __html: md().render(project) }}></div>
                </div>
            </main>
        )
}

const fetchPost = async (project) => {
    var myHeaders = new Headers();
    const apiKey = process.env.DEVTO_API_KEY;
    myHeaders.append("api-key", apiKey);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        const response = await fetch(`https://raw.githubusercontent.com/thevinitgupta/${project}/main/README.md`, requestOptions);
        const body = await response.text();
        console.log("body : ", "404: Not Found"===body)
        return body;
    }
    catch (error) {
        console.log('error', error)
        return String(error);
    }
}

export const getStaticPaths = () => {
    return { paths: [], fallback: 'blocking' }
}

export const getStaticProps = async (context) => {
    console.log(context.params.slug);
    const project = await fetchPost(context.params.slug);
    return {
        props: {
            project
        }
    }
}