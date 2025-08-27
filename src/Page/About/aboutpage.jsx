import img1 from '../../assets/img/pexels-george-desipris-792381.jpg'


export default function Aboutpage(){
     return(
          <div className="pt-15" id='about'>

<h1 className="font-black text-3xl pl-3">About Us :</h1>

<div className="pt-5">


<div className='gap-5 p-5 rounded-md shadow-md flex flex-col lg:flex-row lg:gap-5 w-full '>


<div className="bg-amber-100 text-black p-7 rounded-lg shadow-lg">
<p className="font-bold text-2xl">Art Ai </p>
<p className='mt-5 capitalize'>Imagine a surreal landscape where nature and fantasy intertwine. A golden sunset stretches across the horizon, casting a warm glow on towering crystal mountains that shimmer with every color of the rainbow.</p>
<div>
     <button className='bg-amber-50 mt-5 lg:mt-7 p-2 rounded-md font-black shadow cursor-pointer'>Explore All</button>
</div>
</div>


<div className="rounded-lg shadow-lg text-black">
<img src={img1} alt="g"  className='rounded-lg shadow-lg lg:w-250  h-70 w-full'/>
<div>
</div>
</div>



</div>



</div>


          </div>
     )
}