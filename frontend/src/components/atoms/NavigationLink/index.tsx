import Link from 'next/link';
import React, { memo } from 'react';
import styles from './styles.module.css';

interface LinkProps {
  href: string;
  linkName: string;
}

const NavigationLink = memo((props: LinkProps) => {
  const { href, linkName } = props;
  return (
    <Link href={href} className={styles.link}>
      {`<<     ${linkName}`}
    </Link>
  );
});

export default NavigationLink;
