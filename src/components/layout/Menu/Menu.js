import {StyledMenu} from './Menu.styled';
import {bool} from 'prop-types';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      {' '}
      <div onClick={()=>setOpen(!open)}>
        Lorem
      </div>
      
    </StyledMenu>
  );
};

Menu.propTypes={
  open:bool.isRequired,
}

export default Menu;