import {useState,useEffect} from 'react';
import Landing from './components/Landing/Landing';
import Layout from './components/layout/Layout';
import Deck from './components/Slider/Deck';
import SwiperSlide from './components/Slider/SwiperSlider';
import About from './components/About/About';
import Services from './components/Services/Services';
import References from './components/References/References';
import WhyUs from './components/WhyUs/WhyUs';
import Suppliers from './components/Suppliers/Suppliers';
import Contact from './components/Contact/Contact';
import SwiperSlider from './components/Slider/SwiperSlider';

const App=()=>{
    const [size,setSize] = useState(document.body.clientWidth);
    const [show,setShow] = useState(true);

    useEffect(()=>{
        const onResize = (e) => {
            setSize(e.target.outerWidth);
        };
        window.addEventListener('resize',onResize);
        if(size > 768){
            setShow(false);
        }else {
            setShow(true);
        }
        return ()=>{
            window.removeEventListener('resize',onResize) ;
        }
    },[size]);
return <>

         <Layout > 
        <Landing/> 
        <hr /> 
         {/* {size > 768 ? <Deck /> : null}   */}
         {size > 768  ? <div style={{height:'350px',width:'100%'}} ></div> : <SwiperSlide />}
        <hr/>
        <About />
        <WhyUs />
        <Services />
        <References />
        <Suppliers />
        <Contact />
        </Layout>  
       </>
}

export default App;