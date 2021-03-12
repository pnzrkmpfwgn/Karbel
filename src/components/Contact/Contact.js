import classes from './Contact.module.css';

const Contact=()=>{
    return <div className={classes.contact_container} > 
        <div className={classes.contact_info_container}>
        <h3 className={classes.heading}> İletişim </h3>
        <p className={classes.title} > Telefon Numarası : <span className={classes.info} > 444 31 66 </span> </p> 
        <p className={classes.title} > E-Posta : <span className={classes.info} > JohnDoe@gmail.com </span>  </p> 
        <p className={classes.title} > Adres :  <span className={classes.info} > Adres </span> </p> 
        </div>
        <div className={classes.map} > Koyabilirsek Harita </div>
     </div>
}

export default  Contact;