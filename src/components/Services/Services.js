import classes from './Services.module.css';
import Service from './Service';
import {ServiceData} from '../../data/ServiceData';

const Services =()=>{
    return <div className={classes.services_container} >
       <h3 className={classes.heading} > Hizmetlerimiz </h3> 
        <div className={classes.icon_container} ><i className={"fas fa-wrench fa-3x " + classes.icon }></i></div>
        <hr/>
        <div className={classes.grid_container}>
          { ServiceData.map( (i) => (
           
            <Service key={i.key} image_src={i.image} title={i.title} text={i.text} />
           
          ) ) }
        </div>
    </div>
}
export default Services;