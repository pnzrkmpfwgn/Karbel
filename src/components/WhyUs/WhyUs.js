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
    <p> Kalite, hizmet, verimlilik ve zaman yönetiminin sürekli iyileştirilmesi yoluyla müşteri beklentilerini aşma.</p>
    </div>

    <div className={classes.grid_item} >
    <div  className={classes.img}> <i className={"fas fa-chart-bar fa-3x"} ></i> </div>
    <h3 title="Sektörümüzde Liderlik" id="sektörümüzde_liderlik" >Sektörümüzde Liderlik</h3>
    <p>Sektörümüzde liderlik ve başarma azmi. </p>
    </div>
    
    <div className={classes.grid_item}>
    <div className={classes.img}> <i className={"fas fa-users fa-3x"} ></i> </div>
    <h3 title="Nitelikli İnsan Kaynağı" id="nitelikli_insan_kaynağı" >Nitelikli İnsan Kaynağı</h3>
    <p>Uzmanlaşmış ve nitelikli insan kaynağı.</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-laptop fa-3x"} ></i> </div>
    <h3 title="Yeni Teknolojilerin Takibi" id="yeni_teknolojilerin_takibi" > Yeni Teknolojilerin Takibi</h3>
    <p>Bilgi paylaşımı ve sektörümüzdeki yeni teknolojilerin takibi.</p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-chess-rook fa-3x"} ></i> </div>
    <h3 title="Güvenirlik" id="güvenirlik" >Güvenilirlik</h3>
    <p> Güvenirlik, şeffaflık ve açıklık. </p>
    </div>

    <div className={classes.grid_item} >
    <div className={classes.img}> <i className={"fas fa-leaf fa-3x"} ></i> </div>
    <h3 title="Çevreye Saygı" id="çevreye_saygı" >Çevreye Saygı</h3>
    <p>Çevremize saygıdan kaçınmıyoruz.</p>
    </div>
</div>
    </animated.div>
}

export default WhyUs;