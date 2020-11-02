import React from 'react';

const NewProject = () => {

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

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
            Nuevo Proyecto
            </button>
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
        </>
    );
};

export default NewProject;