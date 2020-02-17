import { css } from '@emotion/core';

export default css`
  ${tw([
    'flex',
    'md:flex-column',
    'justify-start',
    'items-center',
    'w-full',
    'md:w-1/4',
    'md:m-2',
    'p-1',
    'md:p-4',
    'border',
    'border-t-0',
    'border-l-0',
    'border-r-0',
    'md:border-t',
    'md:border-l',
    'md:border-r',
    'border-solid',
    'border-gray-100',
    'rounded',
    'no-underline',
    'text-sm',
    'cursor-pointer',
  ])}
  transition: box-shadow 0.25s;

  &:hover {
    ${tw('md:shadow-md')}
  }

  .icon {
    ${tw('text-lg text-gray-500')}
  }

  > span + span {
    ${tw('md:hidden')}
  }
`;
