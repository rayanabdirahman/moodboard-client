import React from "react";
import Head from "../../atoms/Head";

type Props = {
  isPageLoading?: boolean;
  pageTitle: string;
  children: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({ pageTitle, children }) => (
  <div>
    <Head title={pageTitle} />
    <main>{children}</main>
  </div>
);

export default PageContainer;
