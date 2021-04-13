import classes from './Suppliers.module.css';
import useOnScreen from '../../utils/useOnScreen';
import {useSpring,config,animated} from 'react-spring' 
const Suppliers = () =>{
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
    return <animated.div ref={ref} style={animation} className={classes.suppliers_container}>
        <h3 title="Tedarikçilerimiz Başlık" id="tedarikçilerimiz_başlık" className={classes.heading}> Tedarikçilerimiz </h3>
        <div className={classes.icon_container} > <i className={"fas fa-truck fa-3x " + classes.icon} ></i> </div>
        <hr/>
        <div title="Tedarikçilerimiz Logoları" id="tedarikçilerimiz_logoları" className={classes.image_container}> <img className={classes.image} src={"./assets/suppliers/suppliers.png"} alt="Tedarikçilerimiz"/> </div>
    </animated.div>
}

export default Suppliers