import React from 'react'
import './WorkBalance.css'
import WorkCard from '../WorkCard/WorkCard'
import firstimg from './../../../public/img/first-img.png'
const WorkBalance:React.FC =  () => {
    return (
        <div className='workBalance'>

            <div className='workBalance-container'>
                <h2>Work your way</h2>
                <span>Balance your work and personal life with a range of workplace options and innovative tools that <br></br> help you stay connected globally.</span>


                <div className='displayCard' >
         <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off' altText='this is img' text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' title="Flexible Schedules" />
         <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment2-768x432?qlt=85&wid=480&ts=1686340609442&fit=constrain&dpr=off' altText='this is img' text='Work from a location other than a designated Accenture office or project site.' title="Telecommute" />
         <WorkCard imgages='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment3-768x432?qlt=85&wid=480&ts=1692306911474&fit=constrain&dpr=off' altText='this is img' text='Manage your time away from home with fly-back flights, compressed workweeks, extended weekends and time at client.' title="Client-Site Flexibility" />
                </div>

            </div>

        </div>
    )
}

export default WorkBalance
