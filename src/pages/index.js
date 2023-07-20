import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'



export default function Home() {

  const handleVisit = async ()=>{
    try {
      const resp = await fetch("/api/articles");
      const data = await resp.json();
      console.log(data.message);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
     <Head>
    <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
    <title>Vinit Gupta - Software Developer | Portfolio</title>
    <meta name='description' content='Vinit Gupta is a skilled Software Developer with expertise in ReactJS, MongoDB, NodeJS, and NextJS. Check out his portfolio for projects and experience.'></meta>
    <meta name='keywords' content='Vinit Gupta, Software Developer, ReactJS, MongoDB, NodeJS, NextJS, Portfolio, Projects, Experience'></meta>
    <meta name='author' content='Vinit Gupta'></meta>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
</Head>

    <main
      className={`flex min-h-screen min-w-[100vw] flex-col items-center justify-center px-4 md:px-20 lg:px-24  py-10 lg:py-24`}
      >
        <section className={`w-full h-auto mb-10 flex items-center justify-center gap-8 text-sm md:text-md lg:text-[1.5rem] font-Mono text-gray-500`}>
          <Link onClick={handleVisit} href={`/projects`} className={`hover:text-gray-300 cursor-pointer`}>Projects</Link>
          <Link onClick={handleVisit} href={`/experience`} className={`hover:text-gray-300 cursor-pointer`}>Experience</Link>
          <Link onClick={handleVisit} href={`/blog`} className={`hover:text-gray-300 cursor-pointer`}>Blog</Link>
          <Link onClick={handleVisit} href={`/contact`} className={`hover:text-gray-300 cursor-pointer`}>Contact</Link>
        </section>
      <section className={`w-full h-auto my-5 text-[2rem] md:text-[4rem] lg:text-[6rem] text-white text-center font-Audiowide`}>
        thevinitgupta
      </section>
      <section className={`w-full lg:w-[50%] h-auto mt-10 flex items-center justify-center text-center text-sm lg:text-[1.15rem] font-Body text-gray-500`}>
        {`Hi there, I am currently building full stack projects, contributing to open source and documenting my journey on my blogs.`}
      </section>
    </main>
    </div>
  )
}


