import { css } from '@emotion/core';

import { sizes } from 'styles';
import { toPix } from 'styles/helpers';

export default css`
  position: fixed;
  top: ${toPix(sizes.headerLg)};
  right: 0;
  left: 0;

  @media only screen and (max-width: 700px) {
    top: ${toPix(sizes.headerSm)};
  }

  .mapboxgl-ctrl-attrib {
    display: none !important;
  }
`;
