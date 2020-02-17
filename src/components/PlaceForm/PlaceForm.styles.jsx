import { css } from '@emotion/core';

export default css`
  /* stylelint-disable-next-line */
  ${tw('block')}

  label {
    ${tw('font-medium')}
  }

  input + label {
    ${tw('font-normal')}
  }
`;
