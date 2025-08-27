import img1 from '../../assets/img/35925.jpg'
import img2 from '../../assets/img/39869.jpg'
import img3 from '../../assets/img/3873446.jpg'

import img4 from '../../assets/img/3051.jpg'
import img5 from '../../assets/img/pdmisc1-16-nap.jpg'


import img6 from '../../assets/img/8083558.jpg'
import img7 from '../../assets/img/8083562.jpg'
import img8 from '../../assets/img/8125758.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Filter(){
     return(
          <div className="pt-20">
          

<div>
<Tabs>
    <TabList className="flex w-full justify-center sm:gap-5 gap-15 bg-blue-100 p-2 font-black">
      <Tab className="cursor-pointer outline-0 hover:text-blue-700">All</Tab>
     <Tab className="cursor-pointer outline-0 hover:text-blue-700">Home</Tab>
      <Tab className="cursor-pointer outline-0 hover:text-blue-700">Hand</Tab>
      <Tab className="cursor-pointer outline-0 hover:text-blue-700">Windows</Tab>
    </TabList>





{/* all img  */}
    <TabPanel className="bg-blue-50 w-full">
   
   <div className='p-4 grid justify-center grid-flow-col grid-rows-8 lg:grid-rows-2 md:grid-rows-4 md:justify-center md:gap-10'>

<div className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img1} alt="ks" className='w-50'/>
</div>

<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img2} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img3} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img4} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img5} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img6} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img7} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img8} alt="ks" className='w-50'/>
</div>



   </div>

    </TabPanel>
{/* all img  */}



{/* home  */}
    <TabPanel className="bg-blue-50 w-full">
    <div>

<div className='p-4 grid justify-center grid-flow-col grid-rows-8 lg:grid-rows-2 md:grid-rows-4 md:justify-center md:gap-10'> 

     
<div className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img1} alt="ks" className='w-50'/>
</div>

<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img2} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img3} alt="ks" className='w-50'/>
</div>


</div>

    </div>
    </TabPanel>
{/* home  */}





{/* Hand  */}
 <TabPanel className="bg-blue-50 w-full">
     <div >
          <div className='p-4 grid justify-center grid-flow-col grid-rows-8 lg:grid-rows-2 md:grid-rows-4 md:justify-center md:gap-10'>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img4} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img5} alt="ks" className='w-50'/>
</div>

          </div>
     </div>
</TabPanel>
{/* Hand  */}



 <TabPanel className="bg-blue-50 w-full">
    <div>

<div className='p-4 grid justify-center grid-flow-col grid-rows-8 lg:grid-rows-2 md:grid-rows-4 md:justify-center md:gap-10'> 

     
<div className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img6} alt="ks" className='w-50'/>
</div>

<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img7} alt="ks" className='w-50'/>
</div>


<div  className='w-60 shadow-lg p-5 rounded-md cursor-pointer'>
     <img src={img8} alt="ks" className='w-50'/>
</div>


</div>

    </div>
    </TabPanel>


  </Tabs>
</div>


          </div>
     )
}