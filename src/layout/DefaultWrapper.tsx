//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import Footer from "./footer/Footer";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import HeaderThere from "./header/HeaderThere";
import HeaderFour from "./header/HeaderFour";
import HeaderFive from "./header/HeaderFive";
import FooterTwo from "./footer/footerTwo";
import FooterSubscribe from "./footer/FooterSubscribe";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      {(() => {
        switch (pathName) {
          case "/":
            return <HeaderOne />;
          case "/subscribe":
            return <HeaderOne />;
          case "/contact":
            return <HeaderOne />;
          case "/home-2":
            return <HeaderTwo />;
          case "/home-3":
            return <HeaderThere />;
          case "/instructor-details":
            return <HeaderFour />;
          case "/event-details":
            return <HeaderFour />;
          case "/error":
            return <HeaderFour />;
          case "/sign-in":
            return <HeaderFour />;
          case "/sign-up":
            return <HeaderTwo />;
          case "/forgot-password":
            return <HeaderFour />;
          case "/policy-privacy":
            return <HeaderFour />;
          default:
            return <HeaderOne />;
        }
      })()}
      {children}
      {(() => {
        switch (pathName) {
          case "/home-2":
            return <FooterTwo />;
          case "/subscribe":
            return <FooterSubscribe />
          default:
            return <Footer />;
        }
      })()}
    </>
  );
};

export default Wrapper;
