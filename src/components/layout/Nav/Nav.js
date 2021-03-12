import classes from './Nav.module.css'

const Nav=()=>{
    return <nav className={classes.Nav} >
        <img src={'/assets/Logo.png'} alt="logo" className={classes.logo} />
        <ul className={classes.links_container} >
            <li className={classes.link} > Hakkımızda </li>
            <li className={classes.link} > Neden Karbel </li>
            <li className={classes.link} > Hizmetlerimiz </li>
            <li className={classes.link} > Referanslarımız </li>
            <li className={classes.link} > Tedarikçilerimiz </li>
            <li className={classes.link} > İletişim </li>
        </ul>
        <div className={classes.social_icons} >
            <i className={"fab fa-twitter-square fa-lg "+ classes.icon} ></i>
            <i className={"fab fa-facebook-square fa-lg "+ classes.icon } ></i>
            <i className={"fab fa-linkedin fa-lg "+ classes.icon } ></i>
        </div>
    </nav>
}

export default Nav;