import img1 from '../../assets/img/1 (1).jpg'
import img2 from '../../assets/img/1 (2).jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Home(){

return(
     <div className="pt-15" style={{userSelect: "none"}}>

 <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img1} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>

        </SwiperSlide>


        <SwiperSlide>
          
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img2} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>

        </SwiperSlide>

        <SwiperSlide>
          
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img1} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>

        </SwiperSlide>

        <SwiperSlide>
          
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img2} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>

        </SwiperSlide>

        <SwiperSlide>
          
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img1} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>

        </SwiperSlide>

        <SwiperSlide>
          
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img2} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>

        </SwiperSlide>

        <SwiperSlide>
          
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img1} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>

        </SwiperSlide>

        <SwiperSlide>
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img2} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>
</SwiperSlide>

        <SwiperSlide>
          
<div className=''>
<div className='relative p-7 rounded-md'>
<img src={img1} alt="k" className='rounded-md md:w-full h-100'/>

<div className='text-white font-black absolute top-50 left-10 right-10 z-0 text-center'>
<h1>Art Shop</h1>
<p>Discover a world of creativity at Art.ai, where art comes alive. From stunning posters and unique paintings to digital artworks, we bring high-quality pieces right to your doorstep.</p>
<button className='text-black mt-5 bg-blue-100 p-2 cursor-pointer rounded-md shadow-lg'>Shop Now</button>
</div>
</div>
</div>

        </SwiperSlide>
      </Swiper>





     </div>
)

     

}