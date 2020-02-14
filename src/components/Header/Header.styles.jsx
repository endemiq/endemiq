import { css } from '@emotion/core';

import { sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  ${tw('border-b border-gray-100 py-1 px-3')}
  height: ${toPix(sizes.headerlg)};

  @media only screen and (max-width: 700px) {
    height: ${toPix(sizes.headersm)};
  }

  .brand {
    svg {
      height: ${toPix(sizes.headerlg - 20)};

      @media only screen and (max-width: 700px) {
        height: ${toPix(sizes.headersm - 20)};
      }
    }

    ${tw('inline-flex')}
  }
`;
