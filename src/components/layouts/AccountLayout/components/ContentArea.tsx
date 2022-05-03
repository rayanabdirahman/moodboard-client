import React from 'react';

type Props = {
  title: string;
  subHeading?: string;
  children: React.ReactNode;
};

const ContentArea: React.FC<Props> = ({ title, subHeading, children }) => {
  return (
    <div className="grid place-items-center v-screen">
      <div className="mt-20 w-1/4 max-w-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <h2 className="text-xl font-normal text-gray-500 mb-10">
            {subHeading}
          </h2>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
};

export default ContentArea;
