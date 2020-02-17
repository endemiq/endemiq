import { css } from '@emotion/core';

export default css`
  ${tw([
    'flex',
    'md:flex-col',
    'justify-start',
    'items-center',
    'md:items-start',
    'w-full',
    'md:w-1/4',
    'md:m-2',
    'p-1',
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
    'overflow-hidden',
    'no-underline',
    'text-sm',
    'cursor-pointer',
  ])}
  transition: box-shadow 0.25s;

  @media only screen and (min-width: 700px) {
    padding: 0 !important;
  }

  &:hover {
    ${tw('md:shadow-md')}
  }

  .icon {
    ${tw('text-lg text-gray-500')}
  }

  > span + span + span {
    ${tw('md:hidden')}
  }
`;
