import { TbBrandReact } from 'react-icons/tb'
export default function Card(data) {
    const {date, views, icon, title, description,slug} = data;
    return (
        <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
            <div className="pointer-events-none">
                <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                <div className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 " style={{ maskImage: "radial-gradient(240px at 418.5px 17px, white, transparent);" }}></div>
                <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={{ maskImage: "radial-gradient(240px at 418.5px 17px, white, transparent);" }}></div>
            </div>
            <a href="/projects/planetfall">
                <article className="p-4 md:p-8">
                    <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                            Jul 1, 2023
                        </span>

                        <span className="text-zinc-500 text-sm flex items-center gap-1">
                            <TbBrandReact/>
                        </span>
                    </div>
                    <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">unkey.dev</h2>
                    <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows you to find out and monitor it continuously.
                    </p>
                </article>
            </a>
        </div>
    );
}