import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: Neusa Next Std, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  min-height: 100%;
  line-height: 1.5;
  font-size: 20px;
}

#root {
  min-height: 100%;
}

html {
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: inherit;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyles;