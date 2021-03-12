import {useEffect,useState,useRef} from 'react';

//utils
import {useOnClickOutside} from '../../../utils/hooks';

//components
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';


const Header=()=>{

    //Ref
    const node = useRef();

    //State
    const [open,setOpen] = useState(false);
    const [size,setSize] = useState(document.body.clientWidth);

    //Handlers
    useOnClickOutside(node,()=>setOpen(false));

    //Effects
    useEffect(() => {
        const onResize=(e)=>{
            setSize(e.target.outerWidth);
        };
        window.addEventListener('resize',onResize);
        return () => {
            window.removeEventListener('resize',onResize);
        }
    }, [size]);
   // console.log(size);
    return <header>
    {size > 768 ? (
        <Nav />
    ) : (
        <div ref={node}>
        <img height={100}
         style={{"position":"absolute","right":"0","marginRight":"15px","marginTop":"15px"}}
         src={'/assets/Logo.png'} alt="Logo"/>
        <div style={{"height":"100px"}} ></div>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen} />
        </div>
    )}
    </header>   
}

export default Header;