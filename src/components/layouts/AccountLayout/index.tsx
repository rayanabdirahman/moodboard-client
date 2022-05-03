import React from 'react';
import PageContainer from '../PageContainer';
import ContentArea from './components/ContentArea';

type Props = {
  isPageLoading?: boolean;
  pageTitle: string;
  title: string;
  subHeading: string;
  children: React.ReactNode;
};

const AccountLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <PageContainer {...props}>
      <ContentArea {...props}>{children}</ContentArea>
    </PageContainer>
  );
};

export default AccountLayout;
