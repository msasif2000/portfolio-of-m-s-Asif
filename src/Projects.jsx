import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(()=> {
        fetch('./info.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])
    //console.log(projects);
    return (
        <div className="lg:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
            <h2 data-aos="fade-left" className='text-3xl text-center text- font-bold text-[#615CD4] mt-20 mb-8'>Projects</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                {
                    projects?.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;