import React from 'react';

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md max-w-md relative">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded absolute top-0 right-0 mr-4 mt-4" onClick={onClose}>Close</button>
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 mr-4 mt-14">
                        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">GitHub</button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
