import classes from './Services.module.css';
import {ServiceData} from '../../data/ServiceData';
import useOnScreen from '../../utils/useOnScreen';
import {useSpring,config,animated} from 'react-spring';
import Accordion from './Accordion';

const Services =()=>{
  const [ref,visible] = useOnScreen({rootMargin:'-100px'});
  const animation=useSpring({
    from:{opacity:0.001,transform:'translate3d(0,50px,0)'},
    to:async(next)=>{
        if(visible){
            await next({opacity:1,transform:'translate3d(0,0px,0)'});
        }
    },
    config:config.gentle

})
    return <animated.div ref={ref} style={animation} className={classes.services_container} >
       <h3 title="Hizmetlerimiz Ana Başlığı" id="hizmetlerimiz_ana_başlığı" className={classes.heading} > Hizmetlerimiz </h3> 
        <div className={classes.icon_container}> <i className={"fas fa-wrench fa-3x " + classes.icon} ></i> </div>
       <hr/>
       <p className={classes.info}> Karbel Çelik, sandavic panel, çatı çelik konstriksiyonları, makina imalatı, platform imalatı, helezon, sarsak elek, konveyör imalatı gibi daha bir çok hizmet vermektedir. </p>
       {ServiceData.map(i=> <Accordion key={i.key} title={i.title} image1={i.image1} image2={i.image2} image3={i.image3} image4={i.image4} image5={i.image5} /> )}
    </animated.div>
}
export default Services;