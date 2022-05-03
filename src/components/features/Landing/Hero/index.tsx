import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import * as styles from './styles';
import Link from '../../../atoms/Link';
import { Route } from '../../../../domain/enums/navigation';
import Input from '../../../atoms/Input';

type Props = {
  errorMessage?: string;
  children?: React.ReactNode;
};

const Hero: React.FC<Props> = ({ errorMessage, ...props }) => {
  return (
    <section className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.header}>Shop your local stores.</h1>
          <p className={styles.support}>
            A social marketplace for local shopping with friends.A social
            marketplace for local shopping with friends
          </p>

          <div className="flex align-middle gap-4">
            <Input placeholder="Email address" />
            <Link href={Route.SIGN_UP} type="button">
              Get started
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/iphone-light.png"
            alt="Landscape picture"
            width={320}
            height="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
