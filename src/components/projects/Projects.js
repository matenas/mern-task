import React from 'react';
import Sidebar from "../layout/sidebar/Sidebar";
import Header from "../layout/header/Header";
import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/listTasks/ListTasks";

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Header/>
                <main>
                    <FormTask/>
                    <div className="contenedor-tareas">
                        <ListTasks/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Projects;