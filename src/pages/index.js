import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
    <div>
     <Head>
        <title>Vinit Gupta Portfolio</title>
        <meta name='description' content='Vinit Gupta - Software Developer experience in ReactJS, MongoDB, NodeJS, NextJS'></meta>
      </Head> 
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
      >
        <section className={`w-full h-auto mb-10 flex items-center justify-center gap-8 text-md lg:text-[1.5rem] font-Mono text-gray-500`}>
          <Link href={`/projects`} className={`hover:text-gray-300 cursor-pointer`}>Projects</Link>
          <Link href={`/experience`} className={`hover:text-gray-300 cursor-pointer`}>Experience</Link>
          <Link href={`/blog`} className={`hover:text-gray-300 cursor-pointer`}>Blog</Link>
          <Link href={`/contact`} className={`hover:text-gray-300 cursor-pointer`}>Contact</Link>
        </section>
      <section className={`w-full h-auto my-5 text-[3rem] md:text-[4rem] lg:text-[6rem] text-white text-center font-Audiowide`}>
        thevinitgupta
      </section>
      <section className={`lg:w-[50%] h-auto mt-10 flex items-center justify-center text-center text-sm lg:text-[1.15rem] font-Body text-gray-500`}>
        {`Hi there, I am currently building full stack projects, contributing to open source and documenting my journey on my blogs.`}
      </section>
    </main>
    </div>
  )
}
