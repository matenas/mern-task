import React from 'react';
import ProjectDetail from "./projectDetail/projectDetail";

const ListProject = () => {

    const projects = [
        {name: 'Sitio Web'},
        {name: 'Intranet'},
        {name: 'Proyecto N'}
    ]

    return (
        <ul className="listado-proyectos">
            {
                projects.map( project => (
                    <ProjectDetail
                        project={project}
                    />
                ))
            }
        </ul>
    );
};

export default ListProject;