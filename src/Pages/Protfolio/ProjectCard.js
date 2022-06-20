import React, { useState } from 'react';

const ProjectCard = ({project}) => {
   
  const {image,category,totalLike,title,live,client}=project;
    return (
      <>
      <div className='box btn_shadow w-full'>
        <div className='img'>
          <img src={image} alt=''  />
        </div>
        <div className='category d_flex'>
          <span>{category}</span>
          <label>
            <i className='far fa-heart'></i> {totalLike}
          </label>
        </div>
        <div className='title'>
          <h2>{title}</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

           <a href={live}>
           <button className='btn_shadow '>
             LIVE SIDE
           </button></a>
          
           <a href={client}>
            <button className='btn_shadow '>
               CODE LINK
           </button></a>
          
          <button className='btn_shadow '>
             DETALCE
          </button>
       </div>

        </div>
      </div>

    </>
    );
};

export default ProjectCard;