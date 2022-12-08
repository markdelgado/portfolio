import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react';
import emailjs, { sendForm }  from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';



const Contact = () => {
const [letterClass, setLetterClass]=useState('text-animate')
const refForm = useRef()
const [formInfo, setFormInfo]= useState('')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate=hover')
        }, 3000)
    }, [])

const sendForm = (e) => {
    e.preventDefault()
    console.log(refForm)

    emailjs.sendForm('service_kro6e02', 'template_ckrm16d', refForm.current, 'o_deSIDWwrzms3nyy')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert('Great your messaage has been sent.')
            
        },  (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message')
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
                    strArry={['C', 'o', 'n', 't', 'a', 'c', 't', ' ','m', 'e']}
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
            <div className='info-map'>
                Mark Delgado
                <br/>
                New York, NY
                <br/>
                 <span> markdelgado220@gmail.com </span>
                 {/* <link> markdelgado220@gmail.com </link> */}
            </div>
            <div className='map-wrap'>
              
                    <MapContainer center={[40.7128, -74.0060]} zoom={12} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                      
                    </MapContainer>
            </div>
        </div>
     <Loader type='line-scale-pulse-out-rapid'/>
        </>
    )
}

export default Contact;