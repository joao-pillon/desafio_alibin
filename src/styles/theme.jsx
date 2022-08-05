import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 

:root {
  --branco: #f6f6f6;
  --branco-100: #f1f1f1;
  --cinza-50: #ebe9e9bd;
  --cinza-100: #dcdcdc;
  --cinza-200: #d3d3d3;
  --cinza-400: #c0c0c0;
  --cinza-500: #a9a9a9;
  --cinza-600: #808080;
  --cinza-700: #696969;
  --azul-100: #b0c4de;
  --azul-200: #ade1ff;
  --azul-300: #60bbf0;
  --azul-400: #4186e1;

  margin: 0 auto;
  padding: 0 auto;
  line-height: 1.5;
  list-style: none;
  
  background-size: 5px 5px;
  color: var(--cinza-700);
  font-family: 'Inter', sans-serif;
  font-width: 600px;

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

}
   

`;

export default GlobalStyle;
