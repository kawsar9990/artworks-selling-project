import { Link } from "react-router"
import { useState , useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faXmark )


export default function Header(){
const [menuOpen , setopen] = useState("")
const [scroll , setscroll] = useState("")

useEffect(()=>{
     const handlescroll = () => setscroll(window.scrollY > 10)

     window.addEventListener("scroll", handlescroll)
     return () =>   window.removeEventListener("scroll", handlescroll)
},[])
    
    
     return(
           <>
          <motion.header
          transition={{duration: 0.3}}
          animate={{
               boxShadow: scroll ? "0 4px 12px rgba(0,0,0,0.15)"
               : "0 0px 0px rgba(0,0,0,0)",
          }}

           className="flex fixed top-0 left-0 bg-blue-50 w-full p-2 items-center justify-between z-50">

<h1>
     <Link to="/" className="font-black text-2xl hover:text-blue-500">Art.ai</Link>
</h1>


{/* dekstop size */}
<nav className="hidden md:flex font-black gap-50">

<ul className="flex gap-5">
     <a href="#newfeatures" className="hover:text-blue-500">New Features</a>
     <Link to="" className="hover:text-blue-500 relative">All Poster <span className="bg-red-300 rounded-md absolute text-[12px]">0</span> </Link>

</ul>

<ul className="flex gap-5 mr-3">
     <a href="#" className="hover:text-blue-500">Home</a>
     <a href="#about" className="hover:text-blue-500">About</a>
     <a href="#blog" className="hover:text-blue-500">Blog</a>
     <Link to="cart" className="relative hover:text-blue-500">Cart <span className="bg-red-300 rounded-md absolute text-[12px]">0</span></Link>
</ul>

</nav>


{/* mobile menu button */}
<button 
onClick={()=> setopen(!menuOpen)}
className="md:hidden text-2xl cursor-pointer">
      <FontAwesomeIcon icon={menuOpen ? "xmark" : "bars"} />
</button>

          </motion.header>
{/* mobile menu  */}

<AnimatePresence >
 {menuOpen && (
     <motion.nav
     initial={{y: "-100%", opacity: 0}}
     animate={{y: 0, opacity: 1}}
     exit={{y: "-100%", opacity: 0}}
     transition={{duration : 0.4}}
   className="md:hidden fixed top-[40px] z-50 left-0 h-80 w-full bg-blue-50 shadow-lg flex flex-col pt-5 pl-2"     
>

<ul className="flex flex-col gap-6 font-bold  text-lg">
     <a href="#newfeatures" className="hover:text-blue-500">New Features</a>
     <Link to="" className="hover:text-blue-500 relative">All Poster <span className="bg-red-300 rounded-md absolute text-[12px]">0</span> </Link> 
     <Link to="" className="hover:text-blue-500">Home</Link>
     <a href="#about" className="hover:text-blue-500">About</a>
     <a href="#blog" className="hover:text-blue-500">Blog</a>
     <Link to="cart" className="relative hover:text-blue-500">Cart <span className="bg-red-300 rounded-md absolute text-[12px]">0</span></Link>
</ul>



     </motion.nav>
 )}



</AnimatePresence>




 </>
          
     )
}