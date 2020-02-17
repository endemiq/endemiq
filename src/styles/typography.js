import { css } from '@emotion/core';

import { colors } from 'styles';

const responsiveSizes = {
  default: 0.25,
  h1: 2.28,
  h2: 1.24,
  h3: 0.4,
  h4: 0,
  h5: -0.22,
};

const responsiveTypography = (
  base = '16px',
  elements = { default: 0.5 },
  limit = '1200px'
) => `
  ${Object.keys(elements)
    .map(element => {
      if (element === 'default') {
        return `
        html,
        body {
          font-size: calc(${base} + ${elements[element]} * 1vw) !important;

          @media only screen and (min-width: ${limit}) {
            font-size: ${base} + ${limit} / 100 * ${elements[element]} !important;
          }
        }
      `;
      }

      return `
      ${element},
      .${element} {
        font-size: calc(1rem + ${elements[element]} * 1vw) !important;

        @media only screen and (min-width: ${limit}) {
          font-size: calc(1rem + ${limit} / 100 * ${elements[element]}) !important;
        }
      }
    `;
    })
    .join('')}
`;

export default css`
  html,
  body {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5em;
    color: ${colors.gray['900']};

    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern' 1;
    font-kerning: normal;
    /* stylelint-disable */
    font-feature-settings: 'liga' on;
    font-feature-settings: 'dlig' off;
    font-feature-settings: 'onum' off;
    font-feature-settings: 'lnum' off;
    font-feature-settings: 'ss01' off;
    /* stylelint-enable */
  }

  /* stylelint-disable-next-line */
  ${responsiveTypography('14px', responsiveSizes)}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  h1,
  .h1 {
    line-height: 1.27em;
    letter-spacing: -0.8px;
  }

  h2,
  .h2 {
    line-height: 1.22em;
    letter-spacing: -0.3px;
  }

  h3,
  .h3 {
    line-height: 1.32em;
    letter-spacing: -0.1px;
  }

  h4,
  .h4 {
    line-height: 1.47em;
  }

  h5,
  .h5 {
    line-height: 1.5em;
  }

  ol,
  ul {
    list-style: disc;
    margin: inherit;
    padding: inherit;
  }

  strong,
  b {
    font-weight: 600;
  }

  .content {
    & > * {
      margin-bottom: 2rem;
    }

    a {
      color: ${colors.blue};
    }
  }
`;
