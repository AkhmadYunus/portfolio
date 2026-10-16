import ProjectCard from "./ProjectCard";
function Projects(){
    return (
        <section>
            <h2>Projects</h2>
            <ProjectCard
                title="Microsoft 365 Administration"
                description="Use profisioning and license management" />
            <ProjectCard
                title="Fortigate VPN"
                description="VPN deployment and troubleshooting." />
            <ProjectCard
                title="Printer Infrastructure"
                description="Kyocera printer support." />
        </section>
    )
}

export default Projects;