"use client"
import './page.css'
import img1 from './herosection.png'
import Inovating from '@/components/Inovating/Inovating'
import WorkBalance from '@/components/WorkBalance/WorkBalance'
function page() {
  return (
    <div >
 <div className='newdiv'>

<div className='first-div'>

<h1>Arohi pvt Work Environment</h1>

<span>Be your best every day in a workplace culture that helps drive innovation in everything you do.</span>
</div>

<div className='second-div'>
</div>

 </div>

<Inovating/>

<WorkBalance/>
    </div>
  )
}

export default page
