import { css } from '@emotion/core';

const primary = css`
  padding: 10px 20px 12px 20px;
  ${tw([
    'inline-block',
    'bg-yellow',
    'hover:bg-black',
    'hover:text-yellow',
    'border-0',
    'rounded',
    'text-base',
    'text-gray-900',
    'no-underline',
    'cursor-pointer',
  ])}
  transition:
    0.1s color,
    0.1s background;

  &:active,
  &:focus {
    ${tw('bg-black text-white')}
  }
`;

const sm = css`
  padding: 6px 12px 8px 12px;
`;

export default {
  primary,
  sm,
};
