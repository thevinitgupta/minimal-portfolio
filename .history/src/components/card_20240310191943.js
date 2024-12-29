import { TbBrandReact,TbDatabase, TbApi, TbDeviceMobileCode, TbBrandJavascript, TbDeviceDesktopCode, TbBrandHtml5, TbBrandCss3, TbBrandGithub, TbBrandGraphql, TbBrandFirebase, TbBrandMongodb, TbBrandFlutter, TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import { IoLogoNodejs } from 'react-icons/io'
import { SiSolidity, SiEthereum, SiLeetcode, SiPexels, SiThemoviedatabase, SiAppwrite } from 'react-icons/si'
import { FaVuejs, FaJava, FaChartLine } from 'react-icons/fa'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

export default function Card(data) {
    const {date, img=null, icons, title, description,slug, url, first=false, views=null} = data;
    const iconMap = {
        "reactjs" : <TbBrandReact/>,
        "react" : <TbBrandReact/>,
        "charts" : <FaChartLine/>,
        "firebase" : <TbBrandFirebase/>,
        "appwrite" : <SiAppwrite/>,
        "mongodb" : <TbBrandMongodb/>,
        "flutter" : <TbBrandFlutter/>,
        "api" : <TbApi/>,
        "database" : <TbDatabase/>,
        "nextjs" : <TbBrandNextjs/>,
        "next" : <TbBrandNextjs/>,
        "tailwind" : <TbBrandTailwind/>,
        "tailwindcss" : <TbBrandTailwind/>,
        "nodejs" : <IoLogoNodejs/>,
        "node" : <IoLogoNodejs/>,
        "solidity" : <SiSolidity/>,
        "ether" : <SiEthereum/>,
        "web3" : <SiEthereum/>,
        "blockchain" : <BsCurrencyBitcoin/>,
        "vuejs" : <FaVuejs/>,
        "vue" : <FaVuejs/>,
        "graphql" : <TbBrandGraphql/>,
        "java" : <FaJava/>,
        "javascript" : <TbBrandJavascript/>,
        "html" : <TbBrandHtml5/>,
        "css" : <TbBrandCss3/>,
        "github" : <TbBrandGithub/>,
        "opensource" : <TbBrandGithub/>,
        "webdev" : <TbDeviceDesktopCode/>,
        "appdev" : <TbDeviceMobileCode/>,
        "leetcode" : <SiLeetcode/>,
        "pexels" : <SiPexels/>,
        "tmdb" : <SiThemoviedatabase/>,
    };
    return (
        <div className="overflow-hidden max-w-full md:max-w-[70vw] lg:max-w-full relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 hover:cursor-pointer">
            <div className="pointer-events-none">
                <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                <div className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 " style={{ maskImage: "radial-gradient(240px at 418.5px 17px, white, transparent);" }}></div>
                <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={{ maskImage: "radial-gradient(240px at 418.5px 17px, white, transparent);" }}></div>
            </div>
            <a href={url ? `${url}` : `${slug}`} className={`h-full w-full`}>
                <div className={`w-full h-full flex flex-col ${img ? 'items-center' : 'items-start'} justify-center gap-4 md:flex-row`}>
                    {
                        img && <div className={`w-full md:w-[40%] sm:min-w-[200px] flex items-center justify-center bg-white object-cover`}>
                            <img src={`/${img}.png`} className='h-full sm:h-[200px] max-w-[200px]' alt='img'/>
                        </div>
                    }
                    <article className="p-4 md:p-8">
                    <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                            {date}
                        </span>

                        <span className="text-zinc-500 text-2xl flex items-center gap-1">
                            {icons && icons.map((icon)=>{
                                return iconMap[icon];
                            })}
                        </span>
                    </div>
                    <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">{title}</h2>
                    <p className={`z-20 mt-4 ${first ? "text-lg" : "text-sm"}  duration-1000 text-zinc-400 group-hover:text-zinc-200`}>
                        {description}
                    </p>
                    <div className={`${first?"w-[90%]" : "w-full"} flex justify-between items-center ${first ? "absolute bottom-4" : ""}`}>
                    {first && <span className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                           Read more <span aria-hidden="true">→</span></span>
                        }
                        {views && <div className={`flex flex-1 justify-end items-center gap-2 text-zinc-500`}>
                        <AiOutlineEye/>
                        {views}
                        </div>}
                    </div>
                </article>
                </div>
            </a>
        </div>
    );
}