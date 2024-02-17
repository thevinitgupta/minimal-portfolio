import { useRouter } from 'next/router'
import Navbar from "@/components/navbar";

 
export default function Article({article}) {
  const router = useRouter();
  if(router.isFallback) {
    return <main className={`flex max-w-[100vw] flex-col items-center justify-start`}
    ><Navbar></Navbar><div>Loading</div></main>
  }
  else {
    return (
      <main className={`flex max-w-[100vw] flex-col items-center justify-start`}>
        <Navbar></Navbar>
        <div className={`flex flex-col w-full px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32`}>
          <div className={`max-w-full mx-0`}>
          <h2 className={`text-3xl font-bold tracking-tight text-zinc-100 sm:text-[2.5rem]`}>{article.title}</h2>
          </div>
          <div className="w-full h-px bg-zinc-800"></div>
          <div className={'prose prose-p:text-lg prose-headings:text-white prose-strong:text-white prose-p:text-slate-300 prose-code:text-green-600 prose-img:rounded-md prose-li:text-slate-400 prose-a:text-sky-700 max-w-full'} dangerouslySetInnerHTML={{__html : article.body_html}}></div>
        </div>
      </main>
    )
  }
}

const fetchPost = async (postId)=>{
  const api_key = process.env.DEVTO_API_KEY;
  var myHeaders = new Headers();
  myHeaders.append("api-key", api_key);
  var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

  try {
      const response = await fetch(`https://dev.to/api/articles/${postId}`, requestOptions)
      const result = await response.json();
      
      return result;
//             // Use remark to convert Markdown to HTML
//   const processedContent = await remark().use(html).process(result.content);
//             const htmlContent = processedContent.toString();
//             setBlog(htmlContent);
//             setDisplay(true);
  }
  catch (error) { 
      console.log('error', error) 
      return {};
  }
}

export const getStaticPaths = (context)=>{
  return{ paths: [], fallback: true }
}

export const getStaticProps = async (context)=>{
    console.log(context.params.id);
    const article = await fetchPost(context.params.id);
    return {
        props : {
           article 
        }
    }
}