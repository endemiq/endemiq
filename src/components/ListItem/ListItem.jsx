/** eslint-disable-next-line @jsx jsx */
import React from 'react';
import Link from 'next/link';
import { jsx } from '@emotion/core'; // eslint-disable-line
import PropTypes from 'prop-types';

import { Icon } from 'components';

import styles from './ListItem.styles';

const ListItem = ({ item }) => (
  <Link href="/place/[slug]" as={`/place/${item.properties.slug}`}>
    <a css={styles}>
      <span>
        <h3 className="h4">{item.properties.title}</h3>
        <em>{item.properties.subTitle}</em>
        <br />
        <span className="pt-2">{item.properties.email}</span>
      </span>
      <span className="ml-auto">
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
