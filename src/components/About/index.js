import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    return(
       <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    strArry={['A', 'b', 'o', 'u', 't', '', 'm', 'e' ]}
                    idx={15}
                    />
            </h1>
            <p>Frontend and backend developer looking for a role in an IT company, with the 
                opportunity to work with the latest technologies on challenging and divere projects </p>
            <p></p>
                Software Engineer experienced in Ruby on Rails, JavaScript and React based programming with a background in retail and property management. Possess strong skills in collaboration and communication. An out-of-the box thinker that reaches for creative perspective to solve complex issues and optimize results.
            <p></p>

        </div>

       </div>
    )
}

export default About