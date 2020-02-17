/** @jsx jsx */
import React from 'react';
import Link from 'next/link';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { Icon, Picture } from 'components';

import styles from './ListItem.styles';

const ListItem = ({ item }) => (
  <Link href="/place/[slug]" as={`/place/${item.properties.slug}`}>
    <a css={styles}>
      <span css={tw('w-1/4 mr-1')}>
        <Picture src={item.properties.cover} />
      </span>
      <span>
        <h3 className="h4">{item.properties.title}</h3>
        <em>{item.properties.subtitle}</em>
      </span>
      <span css={tw('ml-auto')}>
        <Icon name="chevron-right" />
      </span>
    </a>
  </Link>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
ListItem.defaultProps = {};

export default ListItem;
