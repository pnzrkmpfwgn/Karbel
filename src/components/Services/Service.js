import classes from './Services.module.css'

const Service = (props) => {
    return <div className={classes.card} >
        <img title="Hizmet" id="hizmet" className={classes.card_image} src={props.image_src} alt="Hizmetlerimiz"/>
        <div className={classes.card_body}>
        <h4 title="Hizmet Başlığı" id="hizmet_başlığı" className={classes.card_title}> {props.title} </h4>
        <p title="Hizmet Tanımı" id="hizmet_tanımı" className={classes.text} > {props.text} </p>
        </div>
    </div>
}

export default Service;