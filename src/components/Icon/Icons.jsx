import React from 'react';

import Add from 'assets/icons/add.svg';
import Edit from 'assets/icons/edit.svg';
import ChevronRight from 'assets/icons/chevron-right.svg';
import Heart from 'assets/icons/heart.svg';
import HeartPlain from 'assets/icons/heart-plain.svg';
import List from 'assets/icons/list.svg';
import Pin from 'assets/icons/pin.svg';
import Sliders from 'assets/icons/sliders.svg';

const Icons = () => (
  <div style={{ display: 'none' }}>
    <Add id="add" />
    <Edit id="edit" />
    <ChevronRight id="chevron-right" />
    <Heart id="heart" />
    <HeartPlain id="heart-plain" />
    <List id="list" />
    <Pin id="pin" />
    <Sliders id="sliders" />
  </div>
);

export default Icons;
