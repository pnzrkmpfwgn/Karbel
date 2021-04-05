import {StyledMenu} from './Menu.styled';
import {bool} from 'prop-types';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      {' '}
      <div  onClick={()=>setOpen(!open)}>
        <a className="link" title="Hakkımızda Linki" id="Hakkımızda_linki_menu" href="#Hakkımızda"> Hakkımızda </a>
      </div>
      
      <div  onClick={()=>setOpen(!open)}>
      <a className="link" title="Neden Karbel Linki" id="neden_karbel_linki_menu"  href="#Neden Karbel?"> Neden Karbel? </a>
      </div>

       <div  onClick={()=>setOpen(!open)}>
       <a className="link" title="Hizmetlerimiz Linki" id="hizmetlerimiz_linki_menu" href="#Hizmetlerimiz"> Hizmetlerimiz </a>
      </div>

      <div  onClick={()=>setOpen(!open)}>
      <a className="link" title="Referanslarımız Linki" id="referanslarımız_linki_menu" href="#Referanslarımız"> Referanslarımız </a>
      </div>

      <div  onClick={()=>setOpen(!open)}>
      <a className="link" title="Tedarikçilerimiz Linki" id="Tedarikçilerimiz_linki_menu" href="#Tedarikçilerimiz"> Tedarikçilerimiz </a>
      </div>

      <div  onClick={()=>setOpen(!open)}>
      <a className="link" title="İletişim Linki" id="iletişim_linki_menu" href="#İletişim"> İletişim </a>
      </div>

      <div>
      <a href="https://twitter.com/KarbelC" title="Twitter Sayfası" id="twitter_sayfası_menu" ><i className={"fab fa-twitter-square fa-lg social_link"} ></i> </a>
      <a href="https://www.facebook.com/Karbel-%C3%87elik-107643741432544" title="Facebook Sayfası" id="facebook_sayfası_menu" ><i className={"fab fa-facebook-square fa-lg social_link"} ></i> </a>
      <a href="https://www.linkedin.com/in/fikret-yi%C4%9Fit-24518a20a/" title="Linkedin Sayfası" id="linkedin_sayfası_menu" ><i className={"fab fa-linkedin fa-lg social_link"} ></i> </a>
      </div>
      
    </StyledMenu>
  );
};

Menu.propTypes={
  open:bool.isRequired,
}

export default Menu;