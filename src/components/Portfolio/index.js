import Loader from 'react-loaders'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
    return(
        <>
            <div className='project-card'>
                Mark Delgado
                <br />
                New York, NY
                <br />
                <span> markdelgado220@gmail.com </span>

                <div className='project-details'>
                    <h1>Project Name</h1>
                    <p>Tech used</p>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/mdmarkdelgado/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                        </li>
                        </ul>
                </div>
          
            </div>
            <Loader type='line-scale-pulse-out-rapid' />

        </>
    
    )
}

export default Portfolio