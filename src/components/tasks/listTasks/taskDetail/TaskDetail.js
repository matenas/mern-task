import React from 'react';

const TaskDetail = ({task}) => {
    const {name,isComplete} = task;

    return (
        <li
            className="tarea sombra">
            <p>{name}</p>
            <div className="estado">
                {
                    isComplete
                    ?
                        (
                            <button
                                type="button"
                                className="completo"
                            >
                            Completado
                            </button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                            >
                                Sin Completar
                            </button>
                        )
                }
            </div>
            <div className="acciones">
                <button
                    className="btn btn-primario"
                    type="button"
                >
                    Editar
                </button>
                <button
                    className="btn btn-secundario"
                    type="button"
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default TaskDetail;