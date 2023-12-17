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
        <div className="md:container mx-auto">
            <h2 className='text-3xl text-center text- font-bold text-[#615CD4] py-4'>Projects</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                {
                    projects?.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;