import { css } from '@emotion/core';

import { colors, sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  display: flex;
  flex-direction: column;
  /* stylelint-disable-next-line */
  flex: 0 0 calc(25% - ${toPix(sizes.gutter)});
  margin: ${toPix(sizes.gutter / 2)};
  padding: ${toPix(sizes.gutter)};
  border: 1px solid ${colors.gray100};
  border-radius: ${toPix(sizes.base / 2)};
  text-decoration: none;
  font-size: 0.8rem;
  cursor: pointer;
  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 1.2rem;
    color: ${colors.gray500};
  }

  > span + span {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    flex: 0 0 100%;
    flex-direction: row;
    justify-items: space-between;
    align-items: center;
    margin: 0;
    border: 0;
    border-bottom: 1px solid ${colors.gray100};

    &:hover {
      box-shadow: none;
    }

    > span + span {
      display: inline;
    }
  }
`;
