import React from 'react';
import NewProject from "../../projects/newProject/NewProject";
import ListProject from "../../projects/listProject/ListProject";


const Sidebar = () => {
    return (
        <aside>
            <h1>MEARN <span>Task</span></h1>
            <NewProject></NewProject>
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListProject />
            </div>
        </aside>
    );
};

export default Sidebar;