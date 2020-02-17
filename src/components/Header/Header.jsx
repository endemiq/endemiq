/** @jsx jsx */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/core';
// import PropTypes from 'prop-types';

import { link, button } from 'styles';
import { Icon } from 'components';
import Logo from 'assets/svg/endemiq-logo.svg';

import styles from './Header.styles';

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const isPlace = router.pathname.includes('/place/');

  const menu = [
    {
      path: '/',
      label: 'home',
    },
    {
      path: '/about',
      label: 'about',
    },
  ];

  return (
    <>
      <header css={styles}>
        <div css={tw('container flex items-center')}>
          <Link href="/">
            <a className="brand">
              <Logo />
            </a>
          </Link>

          <nav css={tw('ml-auto')}>
            {menu.map(({ path, label }, i) => (
              <Link href={path} key={`menu-item-${i}`}>
                <a
                  css={[
                    link,
                    tw('ml-3'),
                    router.pathname === path && tw('text-blue'),
                    path === '/' && tw('hidden md:inline'),
                  ]}
                >
                  {t(label)}
                </a>
              </Link>
            ))}
          </nav>

          {!isPlace && (
            <Link href="/add">
              <a
                css={[button.primary, tw('ml-2 md:ml-4 text-lg md:text-base')]}
              >
                <span css={{ fontSize: '1.1em' }}>
                  <Icon name="add" />
                </span>
                <span css={tw('hidden md:inline pl-05')}>{t('add')}</span>
              </a>
            </Link>
          )}

          {isPlace && (
            <Link href={`/edit/${router.query.slug}`}>
              <a
                css={[button.primary, tw('ml-2 md:ml-4 text-lg md:text-base')]}
              >
                <span css={{ fontSize: '1.1em' }}>
                  <Icon name="edit" />
                </span>
                <span css={tw('hidden md:inline pl-05')}>{t('edit')}</span>
              </a>
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
