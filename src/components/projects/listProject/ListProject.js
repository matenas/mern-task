import React from 'react';
import ProjectDetail from "./projectDetail/projectDetail";
import projectContext from "../../../context/projects/projectContext";

const ListProject = () => {

    //extrear proyectos de state inicial
    const projectsContext  = React.useContext(projectContext);
    const {projects,getProjects} = projectsContext;

    //obtener proyectos cuando carga el componente
    React.useEffect( () => {
        getProjects();
    },[] )

    if(projects.length === 0) return null;

    return (
        <ul className="listado-proyectos">
            {
                projects.map( project => (
                    <ProjectDetail
                        key={project.id}
                        project={project}
                    />
                ))
            }
        </ul>
    );
};

export default ListProject;