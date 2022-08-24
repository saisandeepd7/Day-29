import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarError = ({ sidebarToggle, setSidebarToggle, handleSidebar }) => {
  let sidebarClasses = ''
  sidebarClasses += sidebarToggle
    ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
    : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'

  let margin = ''
  margin += sidebarToggle ? '8.5px' : ''

  useEffect(() => {
    window.addEventListener('resize', function () {
      if (window.innerWidth < 496) {
        setSidebarToggle(false)
      } else {
        setSidebarToggle(true)
      }
    })
  })
  return (
    // <!-- Sidebar -->
    <ul className={sidebarClasses} id="accordionSidebar">
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item">
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <a className="nav-link" href="index.html">
            <i
              className="fas fa-fw fa-tachometer-alt"
              style={{ marginRight: margin }}
            ></i>
            <span>Dashboard</span>
          </a>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog" style={{ marginRight: margin }}></i>
          <span>Components</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <Link to="/buttons" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="buttons.html">
                Buttons
              </a>
            </Link>
            <Link to="/cards" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="cards.html">
                Cards
              </a>
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i
            className="fas fa-fw fa-wrench"
            style={{ marginRight: margin }}
          ></i>
          <span>Utilities</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link to="/colors" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="utilities-color.html">
                Colors
              </a>
            </Link>
            <Link to="/borders" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="utilities-border.html">
                Borders
              </a>
            </Link>
            <Link to="/animations" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="utilities-animation.html">
                Animations
              </a>
            </Link>
            <Link to="/others" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="utilities-other.html">
                Other
              </a>
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Addons</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item active">
        <a
          className="nav-link"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i
            className="fas fa-fw fa-folder"
            style={{ marginRight: margin }}
          ></i>
          <span>Pages</span>
        </a>
        <div
          id="collapsePages"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="login.html">
                Login
              </a>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="register.html">
                Register
              </a>
            </Link>
            <Link to="/forgotpassword" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
            </Link>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <Link to="/errorpage" style={{ textDecoration: 'none' }}>
              <a className="collapse-item active" href="404.html">
                404 Page
              </a>
            </Link>
            <Link to="/blankpage" style={{ textDecoration: 'none' }}>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <Link to="/charts" style={{ textDecoration: 'none' }}>
          <a className="nav-link" href="charts.html">
            <i
              className="fas fa-fw fa-chart-area"
              style={{ marginRight: margin }}
            ></i>
            <span>Charts</span>
          </a>
        </Link>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <Link to="/tables" style={{ textDecoration: 'none' }}>
          <a className="nav-link" href="tables.html">
            <i
              className="fas fa-fw fa-table"
              style={{ marginRight: margin }}
            ></i>
            <span>Tables</span>
          </a>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={handleSidebar}
        ></button>
      </div>
    </ul>
    // <!-- End of Sidebar -->
  )
}

export default SidebarError
