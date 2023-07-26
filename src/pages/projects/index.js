import Card from "@/components/card";
import Navbar from "@/components/navbar";
import projectJson from "../../content/projects.json"

export default function Projects({projectJson}){
    console.log("inside component : ", projectJson.featured);
    const featured = projectJson.featured;
    const projects = projectJson.projects;
    return (
        <main className={`flex max-w-[100vw] flex-col items-center justify-start`}
        >
            <Navbar active={1}></Navbar>
            
            <div className={`flex flex-col w-full text-start px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-28 lg:pt-32`}>
                <div className={`max-w-2xl mx-0`}>
                    <h2 className={`text-3xl font-bold tracking-tight text-zinc-100 sm:text-[2.5rem]`}>Projects</h2>
                    <p className={`mt-4 text-zinc-400`}>Some of the projects I have done in my free time and contributed to.</p>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div className={`grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 `}>
                    <Card icons={featured[0].tags} title={featured[0].title} slug={`/projects/${featured[0].slug}`}  description={featured[0].description} date={featured[0].date} first={true}></Card>
                    <div className={`flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 `}>
                    {
                        [featured[1], featured[2]].map((feature) => <Card key={feature.id} icons={feature.tags} title={feature.title} slug={`/projects/${feature.slug}`} description={feature.description} date={feature.date} ></Card>)
                    }
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div className={`grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3`}>
                    {projects.map((project, index)=>{
                        return <Card key={project.id} icons={project.tags} title={project.title} slug={`/projects/${project.slug}`} description={project.description} date={project.date} ></Card>;
                    })}
                </div>
            </div>

        </main>
    );
}

export const getStaticProps = ()=>{
    console.log(projectJson);
    return {
        props : {
            projectJson
        }
    }
}
