import React from "react";
import clsx from "clsx";
import Head from "../../atoms/Head";
import * as styles from "./styles";

type Props = {
  isPageLoading?: boolean;
  pageTitle?: string;
  children: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({ pageTitle, children }) => (
  <>
    <Head title={pageTitle} />
    <main className={clsx(styles.container)}>{children}</main>
  </>
);

export default PageContainer;
