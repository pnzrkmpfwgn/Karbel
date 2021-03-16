import {useRef, useEffect, useState} from 'react';
function useOnScreen(options) {
  //Creating ref with ref hook
  const ref = useRef();

  //Visiblity state
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    //ref.curernt assigned to a variable for cleanup
    const current = ref.current;

    //Intersection observer takes a function which has an array parameter and returns
    //some information about viewport
    const observer = new IntersectionObserver(([entry]) => {
      //isIntersecting is one of those params which is a boolean and will return accordingly
      //to options which is an object {threshold,rootMargin,queryselector}
      // !Can't use querySelector we are using rootMargin
      setVisible(entry.isIntersecting);
    }, options);

    if (current) {
      //continue to observe current viewport
      observer.observe(current);
    }

    return () => {
      //cleanup function to stop unnecessary observing
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, options]); // useEffect will accordingly to ref and options parameters.

  // return this values where we use in components
  return [ref, visible];
}

export default useOnScreen;