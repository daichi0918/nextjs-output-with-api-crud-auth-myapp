/**
 * NavigationLink
 *
 * @package atoms
 */

import Link from 'next/link';
import React, { memo } from 'react';
import styles from './styles.module.css';

interface LinkProps {
  href: string;
  linkName: string;
}

/**
 * @param {LinkProps} props
 * @returns {JSX.Element}
 */
const NavigationLink = memo((props: LinkProps) => {
  const { href, linkName } = props;
  return (
    <Link href={href} className={styles.link}>
      {`<< ${linkName}`}
    </Link>
  );
});

export default NavigationLink;
