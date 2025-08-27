import img1 from '../../assets/img/35925.jpg'
import img2 from '../../assets/img/39869.jpg'
import img3 from '../../assets/img/3873446.jpg'

import img4 from '../../assets/img/3051.jpg'
import img5 from '../../assets/img/pdmisc1-16-nap.jpg'


import img6 from '../../assets/img/8083558.jpg'
import img7 from '../../assets/img/8083562.jpg'
import img8 from '../../assets/img/8125758.jpg'

export default function Blog(){
     return(
          <div className="pt-10" id='blog'>


           <div>







<div className='p-5'>
    <h1 className='text-2xl font-black '> Trending ArtWorks </h1>

    <div className='mt-5 grid grid-flow-col grid-rows-4 justify-center gap-5 lg:grid-rows-1 md:grid-rows-2 md:gap-20 lg:gap-5'>


<div className='shadow-lg p-3 rounded-md'>
<img src={img1} alt="k" className='w-50'/>
<div className='font-bold'>
     <p>Name: Home Printing</p>
     <p>Price: $2000</p>
</div>
<button className='bg-blue-500 p-2 w-full text-center text-white font-bold cursor-pointer rounded-md '>By Now</button>
</div>

<div className='shadow-lg p-3 rounded-md'>
<img src={img8} alt="k" className='w-50'/>
<div className='font-bold'>
     <p>Name: Windows Printing</p>
     <p>Price: $4000</p>
</div>
<button className='bg-blue-500 p-2 w-full text-center text-white font-bold cursor-pointer rounded-md '>By Now</button>
</div>


<div className='shadow-lg p-3 rounded-md'>
<img src={img4} alt="k" className='w-50'/>
<div className='font-bold mt-6'>
     <p>Name: Hand Printing</p>
     <p>Price: $6000</p>
</div>
<button className='bg-blue-500  p-2 w-full text-center text-white font-bold cursor-pointer rounded-md '>By Now</button>
</div>


<div className='shadow-lg p-3 rounded-md'>
<img src={img2} alt="k" className='w-50'/>
<div className='font-bold mt-10'>
     <p>Name: Home Printing</p>
     <p>Price: $9000</p>
</div>
<button className='bg-blue-500  p-2 w-full text-center text-white font-bold cursor-pointer rounded-md '>By Now</button>
</div>


    </div>

</div>





<div className="p-5">
 <h1 className='text-2xl font-black '>Best Sellers</h1>


  <div className='mt-5 grid grid-flow-col grid-rows-4 justify-center gap-5 lg:grid-rows-1 md:grid-rows-2 md:gap-20 lg:gap-5'>


<div className='shadow-lg p-3 rounded-md'>
<img src={img6} alt="k" className='w-50'/>
<div className='font-bold mt-9'>
     <p>Name: Home Printing</p>
     <p>Price: $4000</p>
</div>
<button className='bg-blue-500 p-2 w-full text-center text-white font-bold cursor-pointer rounded-md '>By Now</button>
</div>

<div className='shadow-lg p-3 rounded-md'>
<img src={img7} alt="k" className='w-50'/>
<div className='font-bold mt-9'>
     <p>Name: Windows Printing</p>
     <p>Price: $2000</p>
</div>
<button className='bg-blue-500 p-2 w-full text-center text-white font-bold cursor-pointer rounded-md '>By Now</button>
</div>


<div className='shadow-lg p-3 rounded-md'>
<img src={img5} alt="k" className='w-50'/>
<div className='font-bold mt-25'>
     <p>Name: Hand Printing</p>
     <p>Price: $3000</p>
</div>
<button className='bg-blue-500  p-2 w-full text-center text-white font-bold cursor-pointer rounded-md '>By Now</button>
</div>


<div className='shadow-lg p-3 rounded-md'>
<img src={img3} alt="k" className='w-50'/>
<div className='font-bold mt-8'>
     <p>Name: Home Printing</p>
     <p>Price: $10000</p>
</div>
<button className='bg-blue-500  p-2 w-full text-center text-white font-bold cursor-pointer rounded-md '>By Now</button>
</div>


    </div>
</div>





           </div>

          </div>
     )
}