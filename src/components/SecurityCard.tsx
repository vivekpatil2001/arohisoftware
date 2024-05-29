import React from 'react'
interface securityCardProps {
    images:String,
    altText: string,
    title:String,
    text:String
   }
const SecurityCard: React.FC<securityCardProps>= ({images,altText,title,text}) => {
  return (
    <div className=' h-[44vh]  w-60 mb-4 cursor-pointer'>
      
      <img src={`${images}`} alt={altText} />
      <p className='font-bold text-2xl my-4'>{title}</p>
      <p className='font-normal '>{text}</p>

      
    </div>
  )
}

export default SecurityCard
