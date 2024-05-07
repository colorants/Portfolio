import React from "react";

import JavaScript from "../assets/javascript.png";
import ReactIcon from "../assets/react.png";
import CSS from "../assets/css.png";
import HTMLIcon from "../assets/html.png";
import TailwindIcon from "../assets/tailwind.png";
import Git from "../assets/github.png";

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#333745] text-gray-300 '>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#7189FF]'>
                        Skills{" "}
                    </p>
                    <p className='py-4'> These are the tools I am learning and using.</p>
                </div>

                <div className='w-full grid grid-cols-4 sm:grid-cols-2 gap-4 text-center sm:pb-8'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className='shadow-md hover:shadow-lg transition duration-300'
                        >
                            <img className='my-3 w-20 mx-auto' src={skill.icon} alt={skill.alt} />
                            <p className='my-3'>{skill.name}</p>
                            {/* Description */}
                            <p className='text-sm m-2'>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

const skills = [
    {
        name: "HTML",
        icon: HTMLIcon,
        alt: "html",
        description: "HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It describes the structure of web pages using markup."
    },
    {
        name: "CSS",
        icon: CSS,
        alt: "css",
        description: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, and fonts of web pages."
    },
    {
        name: "JavaScript",
        icon: JavaScript,
        alt: "javascript",
        description: "JavaScript is a high-level, interpreted programming language that enables interactive web pages and dynamic content. It is commonly used for client-side scripting in web development."
    },
    {
        name: "React",
        icon: ReactIcon,
        alt: "react",
        description: "React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and efficiently manage application state."
    },
    {
        name: "Tailwind",
        icon: TailwindIcon,
        alt: "tailwind",
        description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without having to leave your HTML. It promotes rapid UI development and consistency."
    },
    {
        name: "GitHub",
        icon: Git,
        alt: "github",
        description: "GitHub is a web-based platform for version control using Git. It provides hosting for software development and version control using Git, as well as features for collaboration, code review, and project management."
    },
];
