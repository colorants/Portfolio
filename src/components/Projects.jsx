import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import Remote from '../assets/Projects/Remote.png';
import Planner from '../assets/Projects/Planner.png';
import Website from '../assets/Projects/Website.png';
import Game from '../assets/Projects/Game.png';
import Vedute from '../assets/Projects/Vedute.png';
import Catfit from '../assets/Projects/Catfit.png';

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "IR Remote control",
            image: Remote,
            description: "Description of IR Remote control project",
            github: "https://github.com/your-username/remote-control-repo"
        },
        {
            title: "Appointment planner",
            image: Planner,
            description: "Description of Appointment planner project",
            github: "https://github.com/your-username/appointment-planner-repo"
        },
        {
            title: "Accessibility website",
            image: Website,
            description: "Description of Accessibility website project",
            github: "https://github.com/your-username/accessibility-website-repo"
        },
        {
            title: "Web-game",
            image: Game,
            description: "Description of Web-game project",
            github: "https://github.com/your-username/web-game-repo"
        },
        {
            title: "Marketing for an art platform",
            image: Vedute,
            description: "Description of Marketing for an art platform project",
            github: "https://github.com/your-username/marketing-platform-repo"
        },
        {
            title: "AI Chat Bot for outfit advice",
            image: Catfit,
            description: "Description of AI Chat Bot for outfit advice project",
            github: "https://github.com/your-username/chat-bot-repo"
        }
    ];


    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <div name='projects' className=' md:h-screen w-full  bg-[#333745] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pt-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#7189FF]'>Projects</p>
                    <p className='py-6'>Check out my projects (Listed oldest to newest). All these projects where done at s</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={{backgroundImage: `url(${project.image})`}}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                            onClick={() => openModal(project)}
                        >
                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-black tracking-wider'>{project.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && <ProjectModal project={selectedProject} onClose={closeModal} />}
        </div>
    );
};

export default Projects;
