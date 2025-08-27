import loading from '../../assets/loading/load.svg'
import { useState, useEffect } from 'react'


export default function Load(){
  const [loadings, setLoading] = useState(true);

     useEffect(()=>{

          const timer = setTimeout(() => {
               setLoading(false)
          }, 2000);
          return () => clearTimeout(timer)
          
     },[])

     return(
<div>

{loadings && (
<div className="fixed top-0 left-0 right-0 flex justify-center items-center  inset-0 bg-[#0A0606] w-full h-full" style={{zIndex: "100", overflow: "hidden"}}>

<img src={loading} alt="ks" className='w-50'/>

</div>
)}


</div>


     )
}