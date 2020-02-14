import { css } from '@emotion/core';

export default css`
  ${tw([
    'flex',
    'fixed',
    'justify-between',
    'items-center',
    'z-50',
    'bottom-0',
    'left-1/2',
    'mb-4',
    'bg-white',
    'rounded-full',
    'shadow-md',
    'text-sm',
  ])}
  padding: 6px 15px;
  transform: translateX(-50%);

  a {
    ${tw('no-underline text-gray-500 ml-1 pl-1 border-gray-200')}
    border-left-width: 1px;
    border-left-style: solid;
    transition: color 0.25s;

    &:first-of-type {
      ${tw('border-l-0 ml-0')}
      padding-left: 0 !important;
    }

    &:hover {
      ${tw('text-gray-900')}
    }
  }

  .icon {
    margin-left: 0.3rem;
  }
`;
