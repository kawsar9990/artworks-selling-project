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
    <TabList className="flex w-full justify-center gap-20 bg-blue-100 p-2 font-black">
      <Tab className="cursor-pointer outline-0 hover:text-blue-700">All</Tab>
     <Tab className="cursor-pointer outline-0 hover:text-blue-700">Home</Tab>
      <Tab className="cursor-pointer outline-0 hover:text-blue-700">Hand</Tab>
      <Tab className="cursor-pointer outline-0 hover:text-blue-700">Windows</Tab>
    </TabList>





{/* all img  */}
    <TabPanel className="bg-blue-50 w-full">
   
   <div className='p-4 grid grid-flow-col gap-2 grid-rows-4 md:grid-rows-3   lg:grid-flow-col lg:gap-3 lg:grid-rows-2'>

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

<div className='p-4 grid grid-flow-col gap-2 grid-rows-2 md:grid-rows-2 md:pl-20  lg:gap-3 lg:grid-rows-1'> 

     
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
          <div className='p-4 grid grid-flow-col md:pl-25 grid-rows-1 gap-2  md:grid-rows-1   lg:gap-3  lg:grid-rows-1 lg:pl-50'>


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

<div className='p-4 grid grid-flow-col gap-2 grid-rows-2 md:grid-rows-2 md:pl-20  lg:gap-3 lg:grid-rows-1'> 

     
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