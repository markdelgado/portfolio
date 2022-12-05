import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'a', 'r', 'k']
    const jobArray = ['W','e','b', '', 'D','e','v','e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
             <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                 <br />
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 

             {/* <img src={LogoTitle} alt='developer' /> */}
             {/* <img  alt='m' /> */}
                <span className={`${letterClass} _15`}></span>
                <span className={`${letterClass} _16`}> M</span>

              <AnimatedLetters 
              letterClass={letterClass} 
              strArry={nameArray}
              idx={15}/>
              <br/>
              <AnimatedLetters
                letterClass={letterClass}
                strArry={jobArray}
                 idx={22} />
             </h1>
             <h2> Frontend Developer | Backend Developer </h2>
             <Link to='/contact' className='flat-button'> Contact Me</Link>
            </div>
            {/* <Logo /> */}
        </div>
            <Loader type='line-scale-pulse-out-rapid'/>
        </>
    )
}

export default Home
