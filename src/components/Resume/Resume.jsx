import React, { useRef, useState } from 'react';
import './Resume.css';
import MyResume from './MyResume';




const Resume = () => {



const resumeData = [
    { id: 0, headline: "Education", desc: "I have completed my intermediate (Alim) and I am currently continuing my Bachelor's degree.", 
        myEducation: [
        { degree: "Bachelor's Degree", institution: "Intennational Islamic Univesity Chattagram.", dept: "Qur'anic Sciences & Islamic Studies", result: "CGPA-3.87 (out of 4)"},
        { degree: "Intermediate (Alim)", institution: "Garangia Islamia Kamil Madrasha", dept: "Humanities", result: "GPA-5.00 (out of 5)"},
        { degree: "Junior Dakhil Certificate", institution: "Garangia Islamia Kamil Madrasha", dept: "Humanities", result: "GPA-4.50 (out of 5)"}
       ] },
       

    { id: 1, headline: "Course and Certification", desc: "I have completed several computer-related courese. Below are the details.",
        myExperiences: [
            { position: "Full Stack Web Development with php & Laravel", company: "Code Jogot", duration: "2024 - 2025" },
            { position: "PHP & Laravel", company: "UY Lab", duration: "2024 - 2025" },
            { position: "Web Design", company: "Amader Academy", duration: "17/02/2024 - 15/06/2024" },
            { position: "Office Application Program", company: "Youth Development Training Center", duration: "2018 - 2019" }
        ]
     },


    { id: 2, headline: "Skills", desc: "Expert in React, JavaScript, and TailwindCSS.",
        mySkills: [
            { name: "React.js", level: "Expert" },
            { name: "JavaScript", level: "Advanced" },
            { name: "TailwindCSS", level: "Advanced" },
            { name: "HTML5 & CSS3", level: "Expert" }
        ]
     },


    { id: 3, headline: "About", desc: "i'm Shibgatullah Sifat",
        myAbout: [
            { fact: "I am passionate about frontend development and always eager to learn new technologies." },
            { fact: "I love working with React.js and TailwindCSS to build modern UI." },
            { fact: "I enjoy solving complex UI/UX problems to enhance user experience." },
            { fact: "I am constantly improving my coding skills and exploring new frameworks." }
        ]
     }
];




const [active, setActive] = useState(resumeData[0]);

const resumBtn = [
    { id: 0, title: 'Education' },
    { id: 1, title: 'Course and Certification' },
    { id: 2, title: 'Skills' },
    { id: 3, title: 'About' }
];





  
    return (
        <section className='resume' id='resume'>
            <div className="resume-container">
                <div className="resume-box">
                    <h2 className=''>Why Hire Me?</h2>
                    <p className="desc">I'm a expert on Web Development, Graphics Design and SEO</p>


                {resumBtn.map((btn) => (
                        <button
                            key={btn.id}
                            onClick={() => setActive(resumeData[btn.id])}
                            className={`resume-btn ${active.id === btn.id ? 'active' : ''}`} 
                        >
                            {btn.title}
                        </button>
                    ))}
                </div>


                <div className="resume-box resume-animation" key={active.id}>
                    <MyResume item={active}/>
                </div>
               
            </div>
        </section>
    );
};

export default Resume;