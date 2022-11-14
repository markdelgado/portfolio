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
            <p></p>

        </div>

       </div>
    )
}

export default About