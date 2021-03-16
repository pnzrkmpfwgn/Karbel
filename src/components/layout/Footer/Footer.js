import classes from './Footer.module.css';
const Footer=()=>{
    return <footer title="footer" id="footer" className={classes.background}>
        <small title="Ülkü Ayberk Yiğit" id="ülkü_ayberk_yiğit" > Ülkü Ayberk Yiğit &copy; {new Date().getFullYear()} </small>
    </footer>
}

export default Footer;