import { css } from '@emotion/core';

const iconSizeBase = '0.86em';

export default css`
  ${tw([
    'relative',
    'inline-flex',
    'self-center',
    'justify-center',
    'items-center',
  ])}
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
