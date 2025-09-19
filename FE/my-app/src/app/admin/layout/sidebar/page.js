"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vendor/fontawesome-free/css/all.min.css";
import "@/styles/css/sb-admin-2.min.css";
import "@/styles/style.css";
export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Tự động đóng menu mobile khi resize sang desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setMobileOpen(!mobileOpen); // mobile: show/hide menu
    } else {
      setCollapsed(!collapsed);   // desktop: toggle collapsed
    }
  };

  return (
    <>
      {/* Overlay mobile */}
      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}

      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
          collapsed ? "toggled" : ""
        } ${mobileOpen ? "show" : ""}`}
        id="accordionSidebar"
      >
        {/* Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        {/* Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Interface</div>

        {/* Components */}
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link collapsed`}
            onClick={() => toggleMenu("components")}
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div className={`collapse ${openMenu === "components" ? "show" : ""}`}>
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="#">Buttons</a>
              <a className="collapse-item" href="#">Cards</a>
            </div>
          </div>
        </li>

        {/* Utilities */}
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link collapsed`}
            onClick={() => toggleMenu("utilities")}
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div className={`collapse ${openMenu === "utilities" ? "show" : ""}`}>
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="#">Colors</a>
              <a className="collapse-item" href="#">Borders</a>
              <a className="collapse-item" href="#">Animations</a>
              <a className="collapse-item" href="#">Other</a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Addons</div>

        {/* Pages */}
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link collapsed`}
            onClick={() => toggleMenu("pages")}
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div className={`collapse ${openMenu === "pages" ? "show" : ""}`}>
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="#">Login</a>
              <a className="collapse-item" href="#">Register</a>
              <a className="collapse-item" href="#">Forgot Password</a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="#">404 Page</a>
              <a className="collapse-item" href="#">Blank Page</a>
            </div>
          </div>
        </li>

        {/* Charts */}
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        {/* Tables */}
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        {/* Toggler */}
        <div className="text-center d-md-inline">
          <button className="rounded-circle border-0" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </ul>
    </>
  );
}
