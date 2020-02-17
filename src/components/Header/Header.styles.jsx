import { css } from '@emotion/core';

import { sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  ${tw('fixed w-full z-20 flex bg-white shadow-md')}
  height: ${toPix(sizes.header)};

  .brand {
    svg {
      height: ${toPix(sizes.header - 24)};
    }

    ${tw('inline-flex')}
  }
`;
