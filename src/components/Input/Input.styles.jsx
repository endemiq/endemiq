import { css } from '@emotion/core';

const selectIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5l6 6 6-6"/></svg>
`
  .replace(/"/g, "'")
  .replace(/>\s{1,}</g, '><')
  .replace(/\s{2,}/g, ' ')
  .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);

export default css`
  /* stylelint-disable-next-line */
  ${tw('mb-2')}

  & > label {
    ${tw('block cursor-pointer mb-1')}
  }

  /* stylelint-disable */
  input:not([type='checkbox']),
  select {
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

  select {
    ${tw('cursor-pointer')}
    background: #fff url("data:image/svg+xml,${selectIcon}") no-repeat right 0.75rem center/12px 12px;
  }

  span {
    ${tw('inline-block text-sm italic')}
  }

  .error + span {
    ${tw('text-red')}
  }
`;
