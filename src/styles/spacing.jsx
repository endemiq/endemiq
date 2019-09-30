import { css } from '@emotion/core';

const spacers = [
  { key: 0, value: '0rem' },
  { key: 1, value: '0.25rem' },
  { key: 2, value: '0.5rem' },
  { key: 3, value: '1rem' },
  { key: 4, value: '1.5rem' },
  { key: 5, value: '3rem' },
  { key: 6, value: '4.5rem' },
];

export default css`
  /* stylelint-disable */
  ${spacers.map(
    ({ key, value }) => `
      .mt-${key} {
        margin-top: ${value};
      }
      .ml-${key} {
        margin-left: ${value};
      }`
  )}
  /* stylelint-enable */

  .ml-auto {
    margin-left: auto;
  }

  .mt-auto {
    margin-top: auto;
  }
`;
