import React from 'react';
import projectContext from "../../../context/projects/projectContext";

const NewProject = () => {

    const projectsContext = React.useContext(projectContext);
    const { formNewProject, showForm } = projectsContext;

    const [newProject, setNewProject] = React.useState({
        name: ''
    })
    const {name} = newProject;

    const handleChange = (e) => {
        setNewProject({
            ...newProject,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("creando nuevo proyecto...")
    }
    const handleNewProject = () => {
        console.log("click")
        showForm();
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={handleNewProject}
            >
            Nuevo Proyecto
            </button>
            {
                formNewProject
                ? (

                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="name"
                                id="project"
                                className="input-text"
                                placeholder="Nombre del Proyecto"
                                value={name}
                                onChange={handleChange}
                            />
                            <input
                                type="submit"
                                value="Agregar Proyecto"
                                className="btn btn-primario btn-block"/>
                        </form>
                    )

                    :
                    (
                        null
                    )
            }
        </>
    );
};

export default NewProject;