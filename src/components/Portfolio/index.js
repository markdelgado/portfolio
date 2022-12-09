import Loader from 'react-loaders'
import './index.scss'
import { Card } from 'react-bootstrap'
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
            <div className='container project-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
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