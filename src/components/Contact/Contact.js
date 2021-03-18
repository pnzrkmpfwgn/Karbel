import classes from './Contact.module.css';
import useOnScreen from '../../utils/useOnScreen';
import {useSpring,animated,config} from 'react-spring';

const Contact=()=>{
    const [ref,visible] = useOnScreen({rootMargin:'-100px'});
    const animation=useSpring({
        from:{opacity:0,transform:'translate3d(0,50px,0)'},
        to:async(next)=>{
            if(visible){
                await next({opacity:1,transform:'translate3d(0,0px,0)'});
            }
        },
        config:config.gentle
    
    })
    return <animated.div ref={ref} style={animation} className={classes.contact_container} > 
        <div className={classes.contact_info_container}>
        <h3 title="İletişim" id="iletişim" className={classes.heading}> İletişim </h3>
        <p title="Telefon Numarası" id="telefon_numarası" className={classes.title} > Telefon Numarası : <span className={classes.info} > 444 31 66 </span> </p> 
        <p title="E-Posta" id="E-Posta" className={classes.title} > E-Posta : <span className={classes.info} > JohnDoe@gmail.com </span>  </p> 
        <p title="Adres" id="Adres" className={classes.title} > Adres :  <span className={classes.info} > Adres </span> </p> 
        </div>
        {/* <div title="Harita" id="Harita" className={classes.map} > Koyabilirsek Harita </div> */}
     </animated.div>
}

export default  Contact;