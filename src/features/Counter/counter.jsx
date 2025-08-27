import CountUp from 'react-countup';
export default function CounterBox(){

     return(
          <div className="pt-0">

<div className="flex p-3 bg-blue-200 justify-center gap-4 lg:gap-20 text-center">



<div>
     <p className='font-black'> <CountUp start={0} end={100} duration={30} className="font-black"/>+</p>
     <span className="font-bold text-[15px] md:text-[18px]">Clints</span>
</div>


<div>
     <p className='font-black'> <CountUp start={0} end={10000000} duration={5} className="font-black"/>$</p>
     <span className="font-bold text-[15px] md:text-[18px]">MarketplaceEarn</span>
</div>


<div>
     <p className='font-black'> <CountUp start={0} end={15} duration={50} className="font-black"/>+</p>
     <span className="font-bold text-[15px] md:text-[18px]">MarketplaceJobs</span>
</div>


<div>
     <p className='font-black'> <CountUp start={0} end={3000} duration={20} className="font-black"/>+</p>
     <span className="font-bold text-[15px] md:text-[18px]">Project</span>
</div>


</div>

          </div>
     )

}