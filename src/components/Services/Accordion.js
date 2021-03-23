import {useState, useRef} from 'react';
import classes from './Services.module.css';
import Chevron from './Chevron';
import AwesomeSlider from 'react-awesome-slider';
import withAutoPlay from 'react-awesome-slider/dist/autoplay';
import "react-awesome-slider/dist/custom-animations/cube-animation.css"

function Accordion(props){
    const [setActive,setActiveState] = useState("");
    const [setHeight,setHeightState] = useState("0px");
    const [setRotate,setRotateState] =useState(classes.accordion_icon);
  
    
    const AutoSlider = withAutoPlay(AwesomeSlider);

    const content = useRef(null);

    function toggleAccordion(){
        setActiveState(setActive === "" ? classes.active : "");
        setHeightState(setActive === classes.active ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === classes.active ? classes.accordion_icon : (classes.accordion_icon + " " + classes.rotate) );
    }
    return(
        <div className={classes.accordion_section}>
        <button className={classes.accordion + " " + setActive} onClick={toggleAccordion} >
        <p className={classes.accordion_title}>
            {props.title}
        </p>
        <Chevron className={`${setRotate}`}  width={10} fill={"#777"}  />
        </button>
        <div ref={content} style={{maxHeight: `${setHeight}`}} className={classes.accordion_content}>
           <div className={classes.slider_container} >
           <div className={classes.slider}>
                <AutoSlider play={true} interval={6000} animation="cubeAnimation" >
                    <div data-src={props.image1} ></div>
                    <div data-src={props.image2} ></div>
                    <div data-src={props.image3} ></div>
                    <div data-src={props.image4} ></div>
                    <div data-src={props.image5} ></div>
                </AutoSlider>
           </div>
           </div>
        </div>
        </div>
    )
}

export default Accordion;
