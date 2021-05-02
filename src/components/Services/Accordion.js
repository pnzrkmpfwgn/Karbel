import {useState, useRef} from 'react';
import classes from './Services.module.css';
import Chevron from './Chevron';
import {useTrail, animated} from 'react-spring';

function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState(classes.accordion_icon);
  const [open, setOpen] = useState(false);
  const config = {mass: 5, tension: 2000, friction: 200};
  const trail = useTrail(props.images.length, {
    config,
    from: {opacity: 0, x: 20},
    to: {opacity: open ? 1 : 0, x: open ? 20 : 10},
  });
  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? classes.active : '');
    setHeightState(
      setActive === classes.active ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === classes.active
        ? classes.accordion_icon
        : classes.accordion_icon + ' ' + classes.rotate
    );
    setOpen(setActive === classes.active ? false : true);
  }
  return (
    <div className={classes.accordion_section}>
      <button
        className={classes.accordion + ' ' + setActive}
        onClick={toggleAccordion}
      >
        <p className={classes.accordion_title}>{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
      </button>

      <div
        ref={content}
        style={{maxHeight: `${setHeight}`}}
        className={classes.accordion_content}
      >
        {trail.map(({x, ...otherprops}, i) => (
          <animated.div
            className={classes.img_list_container}
            key={props.images[i]}
            style={{
              ...otherprops,
              transform: x.interpolate((x) => `${x}px,0,0)`),
            }}
          >
            <img className={classes.content} src={props.images[i]} alt='' />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
