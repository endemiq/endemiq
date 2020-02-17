/** @jsx jsx */
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { Icon } from 'components';

import styles from './ListControl.styles';

const ListControl = ({ isMap }) => {
  const { t } = useTranslation();

  return (
    <div css={styles}>
      <a
        href="#filters"
        onClick={e => {
          e.preventDefault();
          alert('coming soon ;)');
        }}
      >
        {t('filter')}
        <Icon name="sliders" />
      </a>
      {isMap && (
        <Link href="/places">
          <a>
            {t('list')}
            <Icon name="list" />
          </a>
        </Link>
      )}
      {!isMap && (
        <Link href="/">
          <a>
            {t('map')}
            <Icon name="pin" />
          </a>
        </Link>
      )}
    </div>
  );
};

ListControl.propTypes = {
  isMap: PropTypes.bool,
};
ListControl.defaultProps = {
  isMap: false,
};

export default ListControl;
