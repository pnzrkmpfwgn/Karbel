import classes from './Footer.module.css';
const Footer=()=>{
    return <footer className={classes.background}>
        <small> Ülkü Ayberk Yiğit &copy; {new Date().getFullYear()} </small>
    </footer>
}

export default Footer;