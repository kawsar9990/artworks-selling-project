import Home from "../../Page/Home/Homepage"
import Filter from "../../Page/ProductFilter/productfilter"
import CounterBox from "../../features/Counter/counter"
import Aboutpage from "../../Page/About/aboutpage"
import Blog from "../../Page/Blog/blog"
import Footer from "../Footer/footer"

export default function Main(){

return(
    <>
    <Home />
    <Filter />
    <CounterBox />
    <Aboutpage />
    <Blog />
    <Footer />
    </>
)

     

}