import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #f0f0f0 no-repeat center top fixed;
    -webkit-font-smoothing: antialiased;
  }

  body, input , button {
    font: 16px Roboto, sans-serif;

    #root{
    flex:1;

  }



  }


  button{
    cursor: pointer;
  }
`;
