import { css } from '@emotion/core';

const base = css`
  ${tw('p-2 rounded my-2')}
`;

const success = css`
  ${base}
  ${tw('bg-green-100 text-green-900')}
`;

const error = css`
  ${base}
  ${tw('bg-red-100 text-red-900')}
`;

export default {
  success,
  error,
};
