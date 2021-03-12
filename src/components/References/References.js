import classes from './References.module.css';
const References =()=>{
    return <div className={classes.references_container}>
    <h3 className={classes.heading}> Referanslarımız </h3> 
    <div className={classes.icon_container}> <i className={"far fa-handshake fa-3x " + classes.icon} ></i> </div>
    <hr/>
    <div className={classes.image_container}> <img className={classes.image} src={"./assets/references/references.png"} alt="Referanslarımız" /> </div>
     </div>
}

export default References;