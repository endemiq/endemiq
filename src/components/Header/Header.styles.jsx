import { css } from '@emotion/core';

import { colors, sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  height: ${toPix(sizes.headerLg)};
  padding: 10px ${toPix(sizes.gutter)};
  border-bottom: 1px solid ${colors.gray100};

  @media only screen and (max-width: 700px) {
    height: ${toPix(sizes.headerSm)};
  }

  .brand {
    height: ${toPix(sizes.headerLg - 20)};

    @media only screen and (max-width: 700px) {
      height: ${toPix(sizes.headerSm - 20)};
    }
  }
`;
