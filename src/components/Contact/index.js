import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react';
import emailjs, { sendForm }  from '@emailjs/browser';



const Contact = () => {
const [letterClass, setLetterClass]=useState('text-animate')
const refForm = useRef()
const [formInfo, setFormInfo]= useState('')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate=hover')
        }, 3000)
    }, [])

const sendForm = (e) => {
    e.preventDefault()
    console.log(refForm)

    emailjs.sendForm('service_kro6e02', 'template_ckrm16d', refForm.current, 'o_deSIDWwrzms3nyy')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            
        },  (error) => {
            console.log('FAILED...', error.text);
        });
        e.target.reset()
};
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
                I'm interested in freelance work. If you have a request or any questions,
                don't hesitate to contact me using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendForm}>
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
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input className='flat-button' type='submit' value='Send'/>
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