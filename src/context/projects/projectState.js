import React from 'react';

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
        FORM_PROJECT,
        GET_PROJECTS
} from '../../types';



const ProjectState = props => {

    const projects = [
        { id:1, name: 'Sitio Web'},
        { id:2, name: 'Intranet1'},
        { id:3, name: 'Proyecto N'}
    ]

     const initialState = {
         projects : [],
         formProject : false
     }

     //Dispatch para ejecutar las acciones
    const [state, dispatch] = React.useReducer(projectReducer, initialState)

    // serie de funciones para el CRUD de los proyectos
    const showForm = () => {
         dispatch({
             type: FORM_PROJECT
         })
    }

    //obtener los proyectos
    const getProjects = () => {
         dispatch({
             type: GET_PROJECTS,
             payload: projects
         })
    }

    return (
        <projectContext.Provider
            value = {{
                projects: state.projects,
                formNewProject: state.formProject,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}
export default ProjectState;
