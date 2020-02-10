import { css } from '@emotion/core';

import { colors } from 'styles';

const primary = css`
  display: inline-block;
  padding: 10px 20px 12px 20px;
  background: ${colors.primary};
  border: 0;
  border-radius: 3px;
  font-size: 1em;
  color: ${colors.gray900};
  text-decoration: none;
  transition: background 0.2s;
`;

const sm = css`
  padding: 6px 12px 8px 12px;
`;

export default {
  primary,
  sm,
};
