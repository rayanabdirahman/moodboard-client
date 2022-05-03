import React from 'react';
import clsx from 'clsx';
import * as styles from './styles';
import { default as NextLink } from 'next/link';
import { Route } from '../../../domain/enums/navigation';
import Link from '../Link';

type Props = {
  isVisible?: boolean;
};

// const navItems = [
//   { name: "Features", href: "/", type: "link" },
//   { name: "Pricing", href: "/", type: "link" },
//   { name: "Contact", href: "/", type: "link" },
// ];

const Navbar: React.FC<Props> = ({ isVisible = true }) => {
  return (
    <nav className={styles.outer_container}>
      <div className={clsx(styles.container)}>
        <NextLink href="/">
          <a className={styles.logo}>moodboard</a>
        </NextLink>

        {/* <ul className={styles.nav_container}>
          {navItems.map((item, index) => (
            <Link key={`navitem--${index}`} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul> */}

        <div className={styles.cta_container}>
          <Link href={Route.SIGN_IN}>Sign in</Link>
          <Link type="button" href={Route.SIGN_UP}>
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
