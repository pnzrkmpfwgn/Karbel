import classes from './Services.module.css'

const Service = (props) => {
    return <div className={classes.card} >
        <img className={classes.card_image} src={props.image_src} alt="Hizmetlerimiz"/>
        <div className={classes.card_body}>
        <h4 className={classes.card_title}> {props.title} </h4>
        <p className={classes.text} > {props.text} </p>
        </div>
    </div>
}

export default Service;