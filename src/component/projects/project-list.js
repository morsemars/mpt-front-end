import React, {useEffect, useState}  from 'react'
import ProjectBox from './project-box'
import token from '../../token.json'
import axios from 'axios'


const ProjectList = () => {

    function showNewProjectModal() {
        document.getElementById("new-project-modal").style.display = "flex"
    }


    const [projects, setProjects] = useState([])
    const [error, setError] = useState()
    
    const projectAPI = axios.create({
        baseURL: 'http://127.0.0.1:5000/',
        headers: {'Authorization': token.token}
      });
    
    useEffect(() => {
          projectAPI.get('/projects')
            .then(res => {
                setProjects(res.data.projects)
            }).catch( error => {
                setError(error)
            })
      }, [])

    return (
        <section className="project-list">
            {error}
            {projects.map(project => (
                <ProjectBox key={project.id} name={project.name} description={project.description} status={project.status} />
            ))}

            <button className="new" onClick={showNewProjectModal}>
                +
            </button>

            <div id="new-project-modal" className="modal">

                <div className="modal-content">
                    <header>
                        <h3>New Project</h3>
                        <div className="action-buttons">
                            <button><ion-icon name="close"></ion-icon></button>
                        </div>

                    </header>

                    <div className="modal-body">
                        <form className="login-form flex-column">

                            <label htmlFor="project-name">Project Name</label>
                            <input type="text" name="project-name" id="project-name" />

                            <label htmlFor="description">Description</label>
                            <div contentEditable className="form-input"></div>

                            <label htmlFor="project-name">Members</label>
                            <select className="form-input" name="members" id="members">
                                <option value="Marcelino Madriaga">Marcelino Madriaga</option>
                                <option value="Marcelino Madriaga">Marcelino Madriaga</option>
                                <option value="Marcelino Madriaga">Marcelino Madriaga</option>
                            </select>

                            <div className="center">
                                <button type="submit">Save</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectList
