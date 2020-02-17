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
      {item.properties.cover && (
        <span css={tw('inline-block w-1/4 md:w-full mr-1')}>
          <Picture
            src={item.properties.cover}
            ratio="16/9"
            sm="25"
            md="25"
            lg="25"
          />
        </span>
      )}
      <span css={tw('md:px-2 md:py-1')}>
        <h3 className="h4">{item.properties.title}</h3>
        <em>{item.properties.subtitle}</em>
      </span>
      <span css={tw('ml-auto')} className="icon-wrapper">
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
