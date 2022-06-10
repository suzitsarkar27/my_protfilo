import React, { useEffect, useState } from 'react';
import Card from '../Feature/Card';
import ProjectCard from './ProjectCard';

const Protfolio = () => {
    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch('infro.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <>
            <section className='protfolio top' id='portfolio'>
               <div className="container">
                <div className="heading text-center">
                     <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                     <h1>My Protfolo</h1>
                </div>
               </div>

               <div className="content grid">
                    {
                        projects.map(project=><ProjectCard key={project.id} project={project}/>)
                    }
               </div>
            </section>
        </>
    );
};

export default Protfolio;