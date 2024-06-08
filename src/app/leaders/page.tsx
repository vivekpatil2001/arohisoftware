import React from 'react'
import LeadersCards from '@/components/LeadersCards/LeadersCards'

const page = () => {
    return (
        <div>
            <div className='sm:h-[70vh] h-[90vh] border   bg-white  flex-wrap sm:flex justify-center gap-8 items-center text-black'>

                <div className='border '>
                    <h1 className='text-6xl    font-bold pb-3'>Leadership</h1>
                    <p className='text-1xl pt-3 font-light '>Our executive leadership team averages years of experience <br></br> with Arohi.</p>
                </div>
                <div className='sm:h-[40vh]  h-[40vh] w-[80vw]   sm:w-[50vw]' style={{
                    backgroundImage:
                        "url('https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>

                </div>

            </div>

            <div className='bg-gray-200 py-6 text-black h-[100vh]'>
                <div className=' w-[80vw]  m-auto'>
                    <h1 className='sm:text-6xl text-2xl text-center font-bold'>Our leaders</h1>
<div className='m-auto  sm:w-[30vw]  '>
<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

</div>

<div className='  sm:flex flex-wrap justify-between '>
<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />
<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />
<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

<LeadersCards imgages='https://t3.ftcdn.net/jpg/01/14/77/98/360_F_114779839_ctvwVVMbR1ETzLYQsBT5aByUJrBgY641.jpg' altText='this is img' text='Chair & CEO' title='sir' />

</div>
                   
                </div>
                

            </div>
        </div>
    )
}

export default page
