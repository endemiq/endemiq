import { css } from '@emotion/core';

export default css`
  /* stylelint-disable-next-line selector-max-empty-lines */
  ${tw('mb-2')}

  label {
    ${tw('block cursor-pointer mb-1')}
  }

  /* stylelint-disable */
  input {
    font-size: 16px;

    ${tw([
      'w-full',
      'mb-05',
      'py-1',
      'px-2',
      'border',
      'border-solid',
      'border-gray-200',
      'appearance-none',
      'rounded',
      'text-gray-700',
      'leading-tight',
    ])}

    &.error {
      ${tw('border border-red')}
    }
  }
  /* stylelint-enable */

  input[type='checkbox'] {
    ${tw('relative')}
    top: -2px;
    transform: scale(1.1);
  }

  span {
    ${tw('inline-block text-sm italic')}
  }

  .error + span {
    ${tw('text-red')}
  }
`;
