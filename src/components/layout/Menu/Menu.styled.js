import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  background-color: silver;
  z-index: 11;
  @media (max-width: ${({theme}) => theme.mobile}) {
    width: 100%;
  }
  .link_container{
    display: inline;
  }
  .link {
    display:inline
    font-size:20px;
    padding: 5px;
    text-decoration: underline;
    color: rgb(30, 34, 83);
    font-weight: bold;
    margin-bottom:10px;
    transition: all 0.3s ease-in-out;

    &:hover{
      cursor: pointer;
      background-color: rgb(54, 54, 54);
      color: white;
    }
  }
  .social_icons_container{
    margin-top:10px;
  }
  .social_link{
    color: rgb(90, 90, 90);
    margin-right:5px;
    transition: all 0.3s ease-in-out;

    &:hover{
      transform: scale(1.2);
    }
    &:nth-child(1):hover{
      color: rgb(94, 169, 221);
    }

    &:nth-child(2):hover{
      color: rgb(66, 103, 178);
    }
    
    &:nth-child(3):hover{
      color: rgb(2, 116, 179);
    }
  }
`;