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
  img {
    width: 200px;
    height: 200px;
    -webkit-filter: drop-shadow(2px 2px 2px #222);
    filter: drop-shadow(2px 2px 2px #222);
    cursor: pointer;
  }
  .link {
    font-size: 2rem;
    color: ${({theme}) => theme.primaryDark};
    font-family: 'Anton', sans-serif;
    font-weight: bold;
    letter-spacing: 0.19rem;
    margin-top: 5px;
    text-decoration: none;
    transition: all 0.3s linear;
    position: relative;
    cursor: pointer;
    padding: 10px 20px 10px 10px;
    font-size: 20px;
    font-style: italic;
    @media (max-width: ${({theme}) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({theme}) => theme.primaryHover};
      text-shadow: 3px 3px 3px #222;
      text-decoration: underline;
    }
  }
`;