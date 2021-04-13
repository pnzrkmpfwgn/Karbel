import classes from './Nav.module.css'
import {useSpring,animated} from 'react-spring';


const Nav=()=>{
    const animation=useSpring({
        from: {opacity: 0.001, transform: 'translate3d(0,-50px,0)'},
        to: {opacity: 1, transform: 'translate3d(0,0px,0)'},
    })
    return <animated.nav style={animation} className={classes.Nav} >
        <img title="Karbel Çelik" id="logo" src={'/assets/Logo.png'} alt="logo" className={classes.logo} />
        <ul className={classes.links_container} >
            <li><a className={classes.link} title="Hakkımızda Linki" id="hakkımızda_linki_nav" href="#Hakkımızda" >Hakkımızda</a> </li>
            <li><a className={classes.link} title="Neden Karbel Linki" id="neden_karbel_linki_nav" href="#Neden Karbel?">Neden Karbel?</a>  </li>
            <li><a className={classes.link} title="Hizmetlerimiz Linki" id="hizmetlerimiz_linki_nav" href="#Hizmetlerimiz">Hizmetlerimiz</a></li>
            <li><a className={classes.link} title="Referanslarımız Linki" id="referanslarımız_linki_nav" href="#Referanslarımız" >Referanslarımız</a></li>
            <li> <a className={classes.link} title="Tedarikçilerimiz Linki" id="tedarikçilerimiz_linki_nav" href="#Tedarikçilerimiz">Tedarikçilerimiz </a></li>
            <li><a href="#İletişim" title="İletişim Linki" id="iletişim_linki_nav" className={classes.link}>İletişim</a>  </li>
        </ul>
        <div className={classes.social_icons} >
            <a href="https://twitter.com/KarbelC" title="Twitter Linki" id="twitter_linki_nav" ><i className={"fab fa-twitter-square fa-lg "+ classes.icon} ></i></a>
            <a href="https://www.facebook.com/Karbel-%C3%87elik-107643741432544" title="Facebook Linki" id="facebook_linki_nav" ><i className={"fab fa-facebook-square fa-lg "+ classes.icon } ></i> </a>
            <a href="https://www.linkedin.com/in/fikret-yi%C4%9Fit-24518a20a/" title="Linkedin Linki" id="linkedin_linki_nav"><i className={"fab fa-linkedin fa-lg "+ classes.icon } ></i> </a>
        </div>
    </animated.nav>
}

export default Nav;