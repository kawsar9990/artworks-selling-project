import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faTwitter, faInstagram ,faLinkedin)


export default function Footer() {
     return(
          <div className="pt-15">

<div className="bg-blue-50 p-10 text-center font-black text-capitalize">
<h1>Subscribe Our Newsletter</h1>
<h2>for regular update</h2>
<p className="text-[12px]">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

<div className="mt-5 flex justify-center">
     <div className="border-2 w-100 p-2 rounded-4xl">
          <input type="text" name="" id=""  placeholder="Your Subscribe" spellCheck={false} className="outline-0 w-50 ml-8 placeholder:w-50"/>
          <button className="bg-blue-500 text-white p-3 cursor-pointer ml-11 rounded-4xl">Subscribe</button>
     </div>
</div>
</div>





<div className="bg-blue-100 ">

<div className="pt-5">




<div className="font-bold grid gap-5 pl-3 pt-5">



<div className="space-y-5 grid lg:grid-cols-4">

<div>
     <h2 className="text-3xl font-black text-black">Art.Ai</h2> 
</div>

<div>
     <h3 className="text-[20px] font-black cursor-pointer">Company</h3>
     <ul className="space-y-2">
<li><a href="#" className="hover:text-blue-500">Home</a></li>
 <li><a href="#" className="hover:text-blue-500">About</a></li>
<li><a href="#" className="hover:text-blue-500">Careers</a></li>
<li><a href="#" className="hover:text-blue-500">Blog</a></li>
<li><a href="#" className="hover:text-blue-500">Contact</a></li>   
  </ul>
</div>

<div>
     <h3 className="text-[20px] font-black cursor-pointer">Resources</h3>
      <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500">Docs</a></li>
              <li><a href="#" className="hover:text-blue-500">API</a></li>
              <li><a href="#" className="hover:text-blue-500">Community</a></li>
          </ul>
</div>


<div>
<h3 className="text-[20px] font-black cursor-pointer">Follow Us</h3>
 <div className="flex space-x-4 text-xl">
<a href="#" className="hover:text-blue-500">
<FontAwesomeIcon icon={faFacebook} /></a>
<a href="#" className="hover:text-blue-500">
     <FontAwesomeIcon icon={faTwitter} />
</a>
<a href="#" className="hover:text-blue-500">
     <FontAwesomeIcon icon={faInstagram} />
</a>
<a href="#" className="hover:text-blue-500">
     <FontAwesomeIcon icon={faLinkedin} />
</a>
</div>
</div>


</div>
</div>





<div className="pt-5 flex justify-center items-center pb-5 lg:flex-row md:flex-row gap-2  flex-col lg:gap-40 md:gap-50">
   <p className="font-black">  © {new Date().getFullYear()} Art.ai. All rights reserved.</p>
    <p className="font-black">Build In Kawsar </p>
          <p className="font-black"><a href="#">Privacy Policy</a><a href="#"> Terms Servics</a></p>
</div>

</div>

</div>



          </div>
     )
}