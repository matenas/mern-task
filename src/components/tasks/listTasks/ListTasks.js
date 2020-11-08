import React from 'react';
import TaskDetail from "./taskDetail/TaskDetail";

const ListTasks = () => {

    const tasksProject = [
        { name: 'Tarea 1', isComplete: true},
        { name: 'Tarea 2', isComplete: false},
        { name: 'Tarea 3', isComplete: true},
        { name: 'Tarea 4', isComplete: true}
    ]

    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                { tasksProject.length === 0
                    ? (<li className="tarea"> <p>No hay tareas asignadas</p> </li>)
                    : (
                        tasksProject.map( task => (
                            <TaskDetail
                                key = {task.name}
                                task = {task}
                            />
                        ))
                    )
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar">
                Eliminar Proyecto &times;
            </button>
        </>
    );
};

export default ListTasks;