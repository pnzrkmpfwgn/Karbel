import classes from './Services.module.css';
import Service from './Service';
import {ServiceData} from '../../data/ServiceData';
import useOnScreen from '../../utils/useOnScreen';
import {useSpring,config,animated} from 'react-spring';

const Services =()=>{
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
    return <animated.div ref={ref} style={animation} className={classes.services_container} >
       <h3 title="Hizmetlerimiz Ana Başlığı" id="hizmetlerimiz_ana_başlığı" className={classes.heading} > Hizmetlerimiz </h3> 
        <div className={classes.icon_container} ><i className={"fas fa-wrench fa-3x " + classes.icon }></i></div>
        <hr/>
        <div className={classes.grid_container}>
          { ServiceData.map( (i) => (
           
            <Service key={i.key} image_src={i.image} title={i.title} text={i.text} />
           
          ) ) }
        </div>
    </animated.div>
}
export default Services;