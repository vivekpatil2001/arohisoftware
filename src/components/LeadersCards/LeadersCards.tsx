import React from 'react'
import './LeadersCards.css'
interface LeadersCardsProps {
    imgages: String,
    altText: string,
    title: String,
    text: String
}
const LeadersCards: React.FC<LeadersCardsProps> = ({ imgages, title, text, altText }) => {
    return (
        <div className='border sm:h-[25vh] xl:w-[25vw] lg:w-[30vw] sm:w-[35vw] w-[70vw] h-[25vh] mt-6 flex   box'>
            <div> <img src={`${imgages}`} alt={altText} className='sm:h-[25vh] h-[25vh] w-[40vw] sm:w-[20vw]' /></div>

<div className='bg-white sm:w-[15vw] w-[30vw] pl-4'><h3 className='text-2xl mt-2 font-bold'>{title}</h3>
                <h4 className='font-midium'>{text}</h4></div>

            <div className='overlay'>

                <h2 className='text-white'>Read Bio</h2>
            </div>
        </div>
    )
}

export default LeadersCards
