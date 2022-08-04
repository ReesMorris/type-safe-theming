import { css } from '@emotion/react';

export const resetCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; /* Set the base font to 10px */
  }

  html,
  body {
    height: 100%;
    width: 100%;
    position: fixed; /* Fixes a weird bug that allows scrolling down */
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    color: inherit;
    font: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  ul {
    list-style-type: none;
  }
`;
