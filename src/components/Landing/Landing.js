import classes from './Landing.module.css';
import {useSpring,animated,config,} from 'react-spring';

const Landing =()=>{
    const animation = useSpring({
        from:{opacity:0.001,transform:'translate3d(50px,0,0)'},
        to:{opacity:1,transform:'translate3d(0px,0,0)'},
        delay:1000,
        config:config.wobbly
    })
    return <animated.div style={animation} className={classes.Landing} >
        <h1 title="Karbel Çeliğe Hoşgeldiniz" id="karbel_çeliğe_hoşgeldiniz" > Karbel Çelik'e Hoşgeldiniz...</h1>
    </animated.div>
}

export default Landing