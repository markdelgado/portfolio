import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
   
    useEffect(() => {
        return setTimeout (() => {
            setLetterClass('text-animate=hover')
        }, 3000)
    }, [])
    return(
        <>
       <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArry={['A', 'b', 'o', 'u', 't', '', 'M', 'e' ]}
                    idx={15}
                    />
            </h1>
            <p>Frontend and backend developer looking for a role in an IT company, with the 
                opportunity to work with the latest technologies with challenging and diverse projects. </p>
            <p>

                Software Engineer experienced in Ruby on Rails, JavaScript and React based programming with a background in retail and property management. Possess strong skills in collaboration and communication. An out-of-the box thinker that reaches for creative perspective to solve complex issues and optimize results.
            </p>
            <p> When i'm not coding I enjoy spending the day hiking with my dog.</p>

    
        </div>
         <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            {/* <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="white" />
            </div> */}
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="EC4D28" />
                    </div>
            
        </div> 
        </div>
       </div>
       {/* <Loader type='pacman'/> */}
       <Loader type='line-scale-pulse-out-rapid'/>
       
       
        </>
    )
}

export default About