import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';


const Contact = () => {
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate=hover')
        }, 3000)
    }, [])
    return(
        <>
        <div className='container contact-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArry={['C', 'o', 'n', 't', 'a', 'c', 't', '','m', 'e']}
                    idx={15}/>
                </h1>
                <p>
                I'm interested in freelance work. If you have a request or any question,
                don't hesitate to contact me using the form below.
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message'></textarea>
                            </li>

                        </ul>

                    </form>
                </div>

            </div>
        </div>
     <Loader type='line-scale-pulse-out-rapid'/>
        </>
    )
}

export default Contact;