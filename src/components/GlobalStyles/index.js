/**
 * createGlobalStyle
 * A helper function to generate a special StyledComponent
 * that handles global styles. Normally, styled components
 * are automatically scoped to a local CSS class and therefore
 * isolated from other components. In the case of createGlobalStyle,
 * this limitation is removed and things like CSS resets or base
 * stylesheets can be applied.
 */

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
     * {
         margin: 0;
         padding: 0;
     }

     body {
         font-family: 'Courier New', Courier, monospace;
         text-align: center;
     }
 `;

export default GlobalStyles;
