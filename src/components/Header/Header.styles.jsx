import { css } from '@emotion/core';

import { sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  ${tw('border-b border-gray-100 py-1 px-3')}
  height: ${toPix(sizes.header)};

  .brand {
    svg {
      height: ${toPix(sizes.header - 24)};
    }

    ${tw('inline-flex')}
  }
`;
