import React, { useState } from 'react';

const ProjectCard = ({project}) => {
    const [modal,setModal]=useState(false)

    const toogleModal=()=>{
        setModal(!modal)
    }
    const {image,category,title,totalLike}=project;
    return (
    <>
        <div className='box btn_shadow'>
            <h2>{title}</h2>
            <img src={image} alt="" onClick={toogleModal} />
        </div>

        <div className='category d_flex'>
              <span onClick={toogleModal} >{category}</span>
              <label htmlFor="">
                <i className='far fa-heart'></i>
                {totalLike}
              </label>
        </div>
        <div className='title'>
            <h2 onClick={toogleModal} >{title}</h2>
            <a href="#popup" className='arrow'onClick={toogleModal} >
                <i className='fas fa-arrow-right'></i>
            </a>
        </div>
     </>
    );
};

export default ProjectCard;