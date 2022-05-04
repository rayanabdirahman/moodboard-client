import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="container mx-auto mt-20 text-center">
      <h1 className="text-7xl mb-6 font-bold">404</h1>
      <p>
        Sorry... nothing here. <Link href="/">Go home</Link>
      </p>
    </div>
  );
};

export default NotFound;
