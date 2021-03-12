import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,body{
        margin:0;
        padding:0;
        font-family: 'Fira Sans', sans-serif;
       
    }
    *,*::after,*::before{
        box-sizing:border-box;
    }
    body{
        background-color:rgb(215,220,224);
        height:100vh;
    }   
`
