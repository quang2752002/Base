"use client";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vendor/fontawesome-free/css/all.min.css";
import "@/styles/css/sb-admin-2.min.css";
import Sidebar from "./layout/sidebar/page";
import TopBar from "./layout/topbar/page";
import Footer from "./layout/footer/page";
import ScrollTop from "./layout/scroll/page";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body id="page-top">
        <Script src="/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/jquery-easing/jquery.easing.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/js/sb-admin-2.min.js" strategy="beforeInteractive" />

        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <ScrollTop />
      </body>
    </html>
  );
}