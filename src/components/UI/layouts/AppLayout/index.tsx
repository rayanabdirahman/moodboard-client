import React from "react";
import Footer from "../../organisms/Footer";
import Navbar from "../../organisms/Navbar";

type Props = { children: React.ReactNode };

const AppLayout: React.FC<Props> = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);

export default AppLayout;
