import React, { useState } from 'react';

const ProjectCard = ({project}) => {

    const {image,category,title,totalLike}=project;
    return (
      <>
      <div className='box btn_shadow '>
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
      <div className="grid grid-cols-1  gap-5">
          <button className='btn_shadow ml-2'>
             LIVE SIDE
          </button>
          <button className='btn_shadow ml-2'>
             CODE LINK
          </button>
          <button className='btn_shadow ml-2'>
             DETALCE
          </button>
       </div>

        </div>
      </div>

    </>
    );
};

export default ProjectCard;