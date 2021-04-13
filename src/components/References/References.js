import classes from './References.module.css';
import useOnScreen from '../../utils/useOnScreen';
import {useSpring,animated,config} from 'react-spring';
const References =()=>{
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
    return <animated.div ref={ref} style={animation} className={classes.references_container}>
    <h3 title="Referanslarımız" id="referanslarımız_başlığı" className={classes.heading}> Referanslarımız </h3> 
    <div className={classes.icon_container}> <i className={"far fa-handshake fa-3x " + classes.icon} ></i> </div>
    <hr/>
    <div className={classes.image_container}> <img title="Referanslarımız Logoları" id="referanslarımız_logoları" className={classes.image} src={"./assets/references/references.png"} alt="Referanslarımız" /> </div>
     </animated.div>
}

export default References;