import { css } from '@emotion/core';

import { sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${toPix(sizes.gutter)};
  }

  .flex {
    display: flex;

    &.row {
      margin-left: ${toPix(sizes.gutter * -0.5)};
      margin-right: ${toPix(sizes.gutter * -0.5)};
    }
  }

  .wrap {
    flex-wrap: wrap;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-items: center;
  }
`;
