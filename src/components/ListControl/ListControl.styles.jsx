import { css } from '@emotion/core';

import { colors, sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  display: flex;
  position: fixed;
  justify-items: space-between;
  align-items: center;
  z-index: 99;
  bottom: ${toPix(sizes.gutter * 2)};
  left: 50%;
  padding: ${toPix(sizes.base)} ${toPix(sizes.gutter)};
  background: ${colors.white};
  border-radius: 200px;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.4);
  font-size: 0.85rem;
  transform: translateX(-50%);

  a {
    text-decoration: none;
    color: ${colors.gray500};
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    border-left: 1px solid ${colors.gray200};
    transition: color 0.25s;

    &:first-of-type {
      margin-left: 0;
      padding-left: 0;
      border: 0;
    }

    &:hover {
      color: ${colors.gray900};
    }
  }

  .icon {
    margin-left: 0.35rem;
  }
`;
