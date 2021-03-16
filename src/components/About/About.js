import classes from './About.module.css';
import {useSpring,animated,config} from 'react-spring';
import useOnScreen from '../../utils/useOnScreen';

const About =()=>{
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
    return <animated.div ref={ref} style={animation} className={classes.about_container} > 
    <h2 title="Karbel Çelik Hakkında" id="karbel_çelik_hakkında" > Karbel Çelik Hakkında</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id itaque sequi odit distinctio explicabo molestias nemo officia esse, soluta voluptatum nostrum accusamus nulla iure dolorum? Quod ut est dolore? </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id itaque sequi odit distinctio explicabo molestias nemo officia esse, soluta voluptatum nostrum accusamus nulla iure dolorum? Quod ut est dolore? </p>
     </animated.div>
}

export default About;