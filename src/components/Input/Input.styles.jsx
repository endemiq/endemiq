import { css } from '@emotion/core';

import { colors } from 'styles';

export default css`
  label {
    display: block;
  }

  input {
    width: 100%;
    padding: 0.8em 1.2em;
    border: ${colors.gray500} 1px solid;
    border-radius: 3px;
    font-size: 1em;
    line-height: 1em;
    color: ${colors.gray700};

    &.error {
      border: ${colors.red} 1px solid;
    }
  }

  input[type='checkbox'] {
    position: relative;
    top: -2px;
    transform: scale(1.1);
  }
`;
