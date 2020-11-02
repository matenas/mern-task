import React from 'react';

const ProjectDetail = ({project}) => {
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >
                {project.name}
            </button>
        </li>
    );
};

export default ProjectDetail;