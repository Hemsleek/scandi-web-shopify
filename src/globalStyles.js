import {createGlobalStyle} from 'styled-components'

const GlobalStyles= createGlobalStyle`
    :root{
        font-size: 16px;
    }
    html,
    body{
        box-sizing: border-box;
        font-family: 'Raleway', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    body{
        margin:0;
        padding:0;
        background-color: #fff;
    }
    

`

export default GlobalStyles