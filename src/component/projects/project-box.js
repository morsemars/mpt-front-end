import React from 'react'
import UserImg from './user.png'



const ProjectBox = ({ name, description, status }) => {

    return (
        <div className="project-box">
            <header>
                <h3> <a href="./project-details.html">{name}</a> </h3>
                <div className="action-buttons">
                    <button className="dropdown">
                        <ion-icon name="ellipsis-vertical"></ion-icon>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                    </div>
                </div>
            </header>
            <div className="details">
                <p>{description}</p>
            </div>
            <footer>
                <div className="members">
                    <div className="image-frame small">
                        <img src={UserImg} alt="" />
                    </div>
                </div>
                <div className="status">
                    0%
                </div>
            </footer>
        </div>
    )
}

export default ProjectBox
