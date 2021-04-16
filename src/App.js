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
//React-Spring
import {useSpring,animated} from 'react-spring';


const App=()=>{
    const [size,setSize] = useState(document.body.clientWidth);
    
    const animation=useSpring({
        from:{opacity:0.001,transform:'translate3d(50px,0,0)'},
        to:{opacity:1,transform:'translate3d(0px,0,0)'},
        delay:2000
    })
    useEffect(()=>{
        const onResize = (e) => {
            setSize(e.target.outerWidth);
        };
        window.addEventListener('resize',onResize);
        return ()=>{
            window.removeEventListener('resize',onResize) ;
        }
    },[size]);
    return <>
         <Layout > 
        <Landing/> 
       <animated.div style={animation} >
            <hr /> 
            {size > 768 ? <Deck /> : null}  
            {size > 768  ? <div style={{height:'350px',width:'100%'}} ></div> : <SwiperSlide />}
            <hr/>
       </animated.div>
        <div title="Hakkımızda" id="Hakkımızda" ><About /></div>
        <div title="Neden Karbel?" id="Neden Karbel?" > <WhyUs /> </div>
        <div title="Hizmetlerimiz" id="Hizmetlerimiz" > <Services /> </div>
        <div title="Referanslarımız" id="Referanslarımız" > <References /> </div>
        <div title="Tedarikçilerimiz" id="Tedarikçilerimiz" > <Suppliers /> </div>
        <div title="İletişim" id="İletişim" > <Contact /> </div>
        </Layout>   
       </>
}

export default App;