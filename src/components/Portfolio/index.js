import Loader from 'react-loaders'
import './index.scss'

const Portfolio = () => {
    return(
        <>
            <div className='project-card'>
                Mark Delgado
                <br />
                New York, NY
                <br />
                <span> markdelgado220@gmail.com </span>
          
            </div>
            <Loader type='line-scale-pulse-out-rapid' />

        </>
    
    )
}

export default Portfolio