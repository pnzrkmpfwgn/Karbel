import classes from './WhyUs.module.css';
import useOnScreen from '../../utils/useOnScreen';
import {useSpring,config,animated} from 'react-spring';


const WhyUs = () =>{
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
    return <animated.div style={animation} ref={ref} className={classes.why_us} >
    <h3 title="Neden Karbel?" id="neden_karbel?" className={classes.heading}> Neden Karbel ? </h3>
    
    <hr/>
        <div className={classes.grid_container}>
    <div className={classes.grid_item}>
    <div  className={classes.img}><i className={"fas fa-hourglass fa-3x"} ></i></div>
    <h3 title="Verimlilik ve Zaman Yönetimi" id="verimlilik_ve_zaman_yönetimi" >Verimlilik ve Zaman Yönetimi</h3>
    <p>Drops of rain could be heard hitting the pane, which made him feel quite sad. How about if I sleep a little bit longer and forget all of this nonsense</p>
    </div>

    <div className={classes.grid_item} >
    <div  className={classes.img}> <i className={"fas fa-chart-bar fa-3x"} ></i> </div>
    <h3 title="Sektörümüzde Liderlik" id="sektörümüzde_liderlik" >Sektörümüzde Liderlik</h3>
    <p>At the floundering legs, he looks and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
    </div>
    
    <div className={classes.grid_item}>
    <div className={classes.img}> <i className={"fas fa-users fa-3x"} ></i> </div>
    <h3 title="Nitelikli İnsan Kaynağı" id="nitelikli_insan_kaynağı" >Nitelikli İnsan Kaynağı</h3>
    <p>He threw himself onto his right and rolled back to where he was. He must have tried it hundred times, shut his eyes so that wouldn't have to look</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-laptop fa-3x"} ></i> </div>
    <h3 title="Yeni Teknolojilerin Takibi" id="yeni_teknolojilerin_takibi" > Yeni Teknolojilerin Takibi</h3>
    <p>Doing business like this takes much effort than doing your own business at home, and on top of that there's the curse of travelling</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-chess-rook fa-3x"} ></i> </div>
    <h3 title="Güvenirlik" id="güvenirlik" >Güvenilirlik</h3>
    <p>He worries about making train connections and irregular food, contact with different people all the time so that you or anyone become friendly.</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-leaf fa-3x"} ></i> </div>
    <h3 title="Çevreye Saygı" id="çevreye_saygı" >Çevreye Saygı</h3>
    <p>It can all go to Hell. He felt a slight itch up on his belly, pushed himself up on his back towards the headboard so that he lift his head better</p>
    </div>
</div>
    </animated.div>
}

export default WhyUs;