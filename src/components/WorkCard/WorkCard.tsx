import React from 'react'
import './WorkCard.css'
interface WorkBalanceProps {
   imgages:String,
   altText: string,
   title:String,
   text:String
  }
const WorkCard: React.FC<WorkBalanceProps>  = ({ imgages, title, text, altText }) => {
  return (
    <div className='card'>
      
    <img src={`${imgages}`} alt={altText}  className='cardImag'/>
    <h3>{title}</h3>
    <h4>{text}</h4>
    </div>
  )
}

export default WorkCard
