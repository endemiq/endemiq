import { css } from '@emotion/core';

import { sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${toPix(sizes.gutter)};
  }

  .d-flex {
    display: flex;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-items: center;
  }
`;
