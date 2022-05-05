import classes from './Contact.module.css';
import useOnScreen from '../../utils/useOnScreen';
import {useSpring,animated,config} from 'react-spring';
import {useWindowDimensions} from '../../utils/hooks';

const Contact=()=>{
    const [ref,visible] = useOnScreen({rootMargin:'-100px'});

    const {width} = useWindowDimensions();
    const animation=useSpring({
        from:{opacity:0.001,transform:'translate3d(0,50px,0)'},
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
        {/* <p title="Telefon Numarası" id="telefon_numarası" className={classes.title} > Telefon Numarası : <span className={classes.info} > 0232 435 50 51 </span> </p>  */}
        <p title="GSM" id ="gsm" className={classes.title}> Telefon Numarası :  <span className={classes.info} > 0553 302 03 72 </span> </p>
        <p title="E-Posta" id="E-Posta" className={classes.title} > E-Posta : <span className={classes.info} > karbelcelik@gmail.com </span>  </p> 
        <p title="Adres" id="Adres" className={classes.title} > Adres :  <span className={classes.info} > 7232/9 Sokak Aykop Sitesi No/40 Pınarbaşı Bornova İzmir</span> </p> 
        </div>
        {width <=768 ? <div title="Harita" id="Harita" className={classes.map} > 
        <iframe title="Adres" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.940063879811!2d27.25103351533629!3d38.419749979647136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x836a340292ba75bb!2zMzjCsDI1JzExLjEiTiAyN8KwMTUnMTEuNiJF!5e0!3m2!1str!2s!4v1637328327452!5m2!1str!2s" 
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"></iframe>
        <div className={classes.button_container}>
        <span className={classes.link_button}>
          {" "}
          <a href="https://www.google.com/maps/place/38%C2%B025'11.1%22N+27%C2%B015'11.6%22E/@38.4197503,27.2510298,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x6032e4366f4de356!8m2!3d38.4197503!4d27.2532185?hl=tr">
          </a>{" "}
        </span>
      </div>
         </div> :<div title="Harita" id="Harita" className={classes.map} > 
        <iframe title="Adres" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.940063879811!2d27.25103351533629!3d38.419749979647136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x836a340292ba75bb!2zMzjCsDI1JzExLjEiTiAyN8KwMTUnMTEuNiJF!5e0!3m2!1str!2s!4v1637328327452!5m2!1str!2s" 
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"></iframe>
        <div className={classes.button_container}>
        <span className={classes.link_button}>
          {" "}
          <a href="https://www.google.com/maps/place/38%C2%B025'11.1%22N+27%C2%B015'11.6%22E/@38.4197503,27.2510298,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x6032e4366f4de356!8m2!3d38.4197503!4d27.2532185?hl=tr">
          </a>{" "}
        </span>
      </div>
         </div>}
     </animated.div>
}

export default  Contact;