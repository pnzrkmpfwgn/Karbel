import classes from './Suppliers.module.css';

const Suppliers = () =>{
    return <div className={classes.suppliers_container}>
        <h3 className={classes.heading}> Tedarikçilerimiz </h3>
        <div className={classes.icon_container} > <i className={"fas fa-truck fa-3x " + classes.icon} ></i> </div>
        <hr/>
        <div className={classes.image_container}> <img className={classes.image} src={"./assets/suppliers/suppliers.png"} alt="Tedarikçilerimiz"/> </div>
    </div>
}

export default Suppliers