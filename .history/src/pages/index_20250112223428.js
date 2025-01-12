import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Blob from "@/components/blob";
import { useRef } from "react";
import { useEffect,useState } from "react";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const headRef = useRef();
  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  // console.log(API_KEY)

  const handleVisit = async () => {
    try {
      const resp = await fetch("/api/articles");
      const data = await resp.json();
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleChat = () => {
    console.log('toggleChat')
    setIsOpen(!isOpen)
  }

  const handleResume = async () => {
    toggleChat();
    // const response = await fetch('/api/files');

    // if (response.status !== 200) {
    //   console.error(response.status, response.statusText);
    // }

    // const blob = await response.blob();
    // const url = window.URL.createObjectURL(blob);
    // const link = document.createElement('a');
    // link.href = url;
    // link.download = 'Vinit_Gupta_Resume.pdf';
    // link.click();
  }

  const redirect = (e) => {
    e.preventDefault();
    router.push("/100DaysofLearning");
  };

  const randomEffect = () => {
    const original = "thevinitgupta".split("");

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    let iterations = 0;
    const interval = setInterval(() => {
      headRef.current.innerText = headRef.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) return original[index];
          else return letters[Math.floor(Math.random() * 36)];
        })
        .join("");
      if (iterations >= 13) clearInterval(interval);
      iterations += 1 / 3;
    }, 70);
  };

  useEffect(() => {
    randomEffect();
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <title>Vinit Gupta - Software Developer | Portfolio</title>
        <meta
          name="description"
          content="Vinit Gupta is a skilled Software Developer with expertise in ReactJS, MongoDB, NodeJS, and NextJS. Check out his portfolio for projects and experience."
        ></meta>
        <meta
          name="keywords"
          content="Vinit Gupta, Software Developer, ReactJS, MongoDB, NodeJS, NextJS, Portfolio, Projects, Experience"
        ></meta>
        <meta name="author" content="Vinit Gupta"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <main
        className={`flex min-h-screen max-w-[100vw] flex-col items-center justify-center px-4 md:px-20 lg:px-24  py-10 lg:py-24 relative`}
      >
        <div onClick={handleResume} className={`absolute w-16 md:w-24 aspect-square object-contain bottom-10 right-6 bg-transparent cursor-pointer text-white hover:scale-110 animate-spin-slow hover:animate-spin-slower`}>
          <img src="/hire.png" alt="hire me" className={`h-full`}/>
        </div>
        {isOpen ? <Chatbot toggleChat={toggleChat} geminiApiKey={GEMINI_API_KEY}/> : null}
        <section
          className={`w-full h-auto mb-10 flex items-center justify-center gap-4 md:gap-8 text-sm md:text-md lg:text-[1.5rem] font-Mono text-gray-500 z-5`}
        >
          <Link
            href={`/projects`}
            className={`hover:text-gray-300 cursor-pointer`}
          >
            Projects
          </Link>
          <Link
            href={`/experience`}
            className={`hover:text-gray-300 cursor-pointer`}
          >
            Experience
          </Link>
          <Link href={`/blog`} className={`hover:text-gray-300 cursor-pointer`}>
            Blog
          </Link>
          <Link
            href={`/contact`}
            className={`hover:text-gray-300 cursor-pointer`}
          >
            Contact
          </Link>
          <Link
            href={`https://ggl.link/vg_resume`} target="_blank"
            className={`hover:text-gray-300 cursor-pointer`}
          >
            Resume
          </Link>
        </section>
        <section
          ref={headRef}
          className={`w-full h-auto my-5 text-[2rem] md:text-[4rem] lg:text-[6rem] text-white text-center font-Audiowide z-5`}
        >
          thevinitgupta
        </section>
        <section
          className={`w-full lg:w-[50%] h-auto mt-10 flex items-center justify-center text-center text-sm lg:text-[1.15rem] font-Body text-gray-500 z-5`}
        >
          <p>
            Hi there, I am currently working full time for 1 year+, building products optimized for large user-base and documenting my journey on my blogs. <br />
            <span
              className={`text-gray-50 cursor-pointer font-Mono`}
              onClick={redirect}
            >
              👉 100 Days of Learning challenge 👈
            </span>
          </p>
        </section>
      </main>
    </div>
  );
}
