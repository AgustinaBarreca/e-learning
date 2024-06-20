'use-client'
import React from "react";
import CopyrightArea from "./copyright-area";
import { SubscribeForm } from "@/form/subscribe-form";
import Link from "next/link";

const FooterSubscribe = () => {
  return (
    <>
      <footer>
        <div className="footer__main-subscribe-section footer-bg">
          <div className="footer__area-subscribe-section">
            <div className="footer__top pb-40">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 footer__subscribe-section-col" >
                    <div className="footer__widget mb-50">
                      <div className="footer__widget-head mb-22">
                        <h3 className="footer__widget-title-subscribe-section">Subscribe</h3>
                      </div>
                      <div className="footer__widget-body">
                        <div className="footer__subscribe-section-email">
                          <SubscribeForm />
                          <p>
                            Get the latest news and updates right at your inbox
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer_bottom" style={{
              position: 'absolute',
              left: '0',
              width: '100%',
              alignItems: 'center',
              bottom: '110px'
            }}>
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div
                    className="footer__copyright text-center"
                  >
                    <p>
                      © 2024 Get Your Top, All Rights Reserved. Design By{" "}
                      <Link href="/"> GYT </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSubscribe;
