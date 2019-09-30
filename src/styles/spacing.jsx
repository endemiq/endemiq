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
      .m-${key} { margin: ${value}; }
      .mx-${key} { margin-left${value}; margin-right${value}; }
      .my-${key} { margin-top: ${value}; margin-bottom: ${value}; }
      .mt-${key} { margin-top: ${value}; }
      .mb-${key} { margin-bottom: ${value}; }
      .mr-${key} { margin-right: ${value}; }
      .ml-${key} { margin-left: ${value}; }

      .p-${key} { padding: ${value}; }
      .px-${key} { padding-left${value}; padding-right${value}; }
      .py-${key} { padding-top: ${value}; padding-bottom: ${value}; }
      .pt-${key} { padding-top: ${value}; }
      .pb-${key} { padding-bottom: ${value}; }
      .pr-${key} { padding-right: ${value}; }
      .pl-${key} { padding-left: ${value}; }
      `
  )}
  /* stylelint-enable */

  .ml-auto {
    margin-left: auto;
  }

  .mt-auto {
    margin-top: auto;
  }
`;
