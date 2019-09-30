import { css } from '@emotion/core';

const iconSizeBase = '0.86em';

export default css`
  display: inline-flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0.1em;
  width: 1em;
  height: 1em;
  font-size: ${iconSizeBase};
  color: inherit;

  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
`;
