import classes from './About.module.css';
import {useSpring,animated,config} from 'react-spring';
import useOnScreen from '../../utils/useOnScreen';

const About =()=>{
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
    return <animated.div ref={ref} style={animation} className={classes.about_container} > 
    <h2 title="Karbel Çelik Hakkında" id="karbel_çelik_hakkında" > Karbel Çelik Hakkında</h2>
        <p> İzmir merkezli Karbel Çelik, çelik konstrüksiyon projelerinde büyük bir deneyime sahip olan firmamız kurulduğu yıldan bu yana, kısa sürede dünyanın prestijli markaları birlikte çalışarak bir çok projeye başarıyla imza atmış atmış ve alanında lider konuma gelmiştir. Firmamız alanındaki diğer kollar olan makina imalatı, taşeronluk hizmetleri ve bakım, onarım inşaat alanlarında da kaliteli hizmet sunmaktadır.</p>
        <p> Alanında bulunduğu projeler arasında firmamız: otel inşaatları, sanayi tesisleri, köprüler, gökdelenler, fabrikalar gibi değişik mekanların çelik konstrüksiyon hizmetlerini, taşeronluk hizmetlerini, bakım-onarım inşaat hizmetleri ve bunun yanında makina imalatlarını kusursuz ve güvenilir ekip personeli ile birlikte yapmaktadır. Firmamız geçmişte olduğu gibi gelecekte de güvenilir ve kaliteli bir hizmet vermekten mutluluk duymaktadır. </p>
     </animated.div>
}

export default About;