import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Dashboard from './Dashboard';
import DashboardCorre from './DashboardCorre';
import DashboardBRMS from './DashboardBRMS';
import DashboardBSC from './DashboardBSC';
import DashboardHCSC from './DashboardHCSC';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  


ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <aside className="page-sidebar">
        <div className="page-logo">
                <img src="img/logo/claimlogiq-logo.webp" alt="ClaimLogiq" aria-roledescription="logo"/>
                {/* <span className="page-logo-text mr-1">SmartAdmin WebApp</span> */}
                {/* <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"/> */}
                {/* <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"/> */}
            {/* </a> */}
        </div>
        {/* <!-- BEGIN PRIMARY NAVIGATION --> */}
        <nav id="js-primary-nav" className="primary-nav js-list-filter" role="navigation">
            <div className="nav-filter">
                <div className="position-relative">
                    <input type="text" id="nav_filter_input" placeholder="Filter menu" className="form-control" data-tabindex="0"/>
                    {/* <a href="#" data-onclick="return false;" className="btn-primary btn-search-close js-waves-off" data-action="toggle" data-className="list-filter-active" data-target=".page-sidebar">
                        <i className="fal fa-chevron-up"/>
                    </a> */}
                </div>
            </div>
            <ul id="js-nav-menu" className="nav-menu js-nav-built">
                <a href="#" title="Dashboard" data-filter-tags="theme settings" className=" waves-effect waves-themed">
                    <i className="fal fa-cog"></i>
                    <span className="nav-link-text" data-i18n="nav.theme_settings">Dashboards</span>
                  <b className="collapse-sign"><em className="fal fa-angle-down"></em></b>
                </a>
                <li className="active">
                    <ul>
                        <li className="active">
                            <NavLink to="/" title="Dashboard" className="waves-effect waves-themed">
                                <span className="nav-link-text" >Main</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/DashboardCorre" title="Corre Dashboard" className="waves-effect waves-themed">
                                <span className="nav-link-text">Corre Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/DashboardHCSC" title="HCSC Dashboard" data-filter-tags="application intel marketing dashboard" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.application_intel_marketing_dashboard">HCSC Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/DashboardBSC" title="BSC Dashboard" data-filter-tags="application intel marketing dashboard" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.application_intel_marketing_dashboard">BSC Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/DashboardBRMS" title="BRMS Dashboard" data-filter-tags="application intel marketing dashboard" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.application_intel_marketing_dashboard">BRMS Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>
                </li> 
                {/* <li>
                    <a href="#" title="Theme Settings" data-filter-tags="theme settings" className=" waves-effect waves-themed">
                        <i className="fal fa-cog"></i>
                        <span className="nav-link-text" data-i18n="nav.theme_settings">Theme Settings</span>
                    <b className="collapse-sign"><em className="fal fa-angle-down"></em></b></a>
                    <ul>
                        <li>
                            <a href="settings_how_it_works.html" title="How it works" data-filter-tags="theme settings how it works" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.theme_settings_how_it_works">How it works</span>
                            </a>
                        </li>
                        <li>
                            <a href="settings_layout_options.html" title="Layout Options" data-filter-tags="theme settings layout options" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.theme_settings_layout_options">Layout Options</span>
                            </a>
                        </li>
                        <li>
                            <a href="settings_theme_modes.html" title="Theme Modes (beta)" data-filter-tags="theme settings theme modes (beta)" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.theme_settings_theme_modes_(beta)">Theme Modes (beta)</span>
                            </a>
                        </li>
                        <li>
                            <a href="settings_skin_options.html" title="Skin Options" data-filter-tags="theme settings skin options" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.theme_settings_skin_options">Skin Options</span>
                            </a>
                        </li>
                        <li>
                            <a href="settings_saving_db.html" title="Saving to Database" data-filter-tags="theme settings saving to database" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.theme_settings_saving_to_database">Saving to Database</span>
                            </a>
                        </li>
                    </ul>
                </li> */}
                {/* <li>
                    <a href="#" title="Documentation" data-filter-tags="documentation" className=" waves-effect waves-themed">
                        <i className="fal fa-book"></i>
                        <span className="nav-link-text" data-i18n="nav.documentation">Documentation</span>
                    <b className="collapse-sign"><em className="fal fa-angle-down"></em></b></a>
                    <ul>
                        <li>
                            <a href="docs_general.html" title="General Docs" data-filter-tags="documentation general docs" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.documentation_general_docs">General Docs</span>
                            </a>
                        </li>
                        <li>
                            <a href="docs_project_structure.html" title="Project Structure" data-filter-tags="documentation project structure" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.documentation_project_structure">Project Structure</span>
                            </a>
                        </li>
                        <li>
                            <a href="docs_flavors_editions.html" title="Flavors &amp; Editions" data-filter-tags="documentation flavors &amp; editions" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.documentation_flavors_&amp;_editions">Flavors &amp; Editions</span>
                            </a>
                        </li>
                        <li>
                            <a href="docs_community_support.html" title="Community Support" data-filter-tags="documentation community support" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.documentation_community_support">Community Support</span>
                            </a>
                        </li>
                        <li>
                            <a href="docs_premium_support.html" title="Premium Support" data-filter-tags="documentation premium support" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.documentation_premium_support">Premium Support</span>
                            </a>
                        </li>
                        <li>
                            <a href="docs_licensing.html" title="Licensing" data-filter-tags="documentation licensing" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.documentation_licensing">Licensing</span>
                            </a>
                        </li>
                        <li>
                            <a href="docs_buildnotes.html" title="Build Notes" data-filter-tags="documentation build notes" className=" waves-effect waves-themed">
                                <span className="nav-link-text" data-i18n="nav.documentation_build_notes">Build Notes</span>
                                <span className="">v4.5.1</span>
                            </a>
                        </li>
                    </ul>
                </li> */}
            </ul>
            <div className="filter-message js-filter-message bg-success-600"></div>
        </nav>
    </aside>
    <div className="page-content-wrapper">
    <header className="page-header" role="banner">
                        <div className="page-logo">
                            {/* <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut"> */}
                                <img src="img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo"/>
                                <span className="page-logo-text mr-1">SmartAdmin WebApp</span>
                                <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"/>
                                <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"/>
                            {/* </a> */}
                        </div>
                        <div className="hidden-lg-up">
                            {/* <a href="#" className="header-btn btn press-scale-down waves-effect waves-themed" data-action="toggle" data-className="mobile-nav-on"> */}
                                <i className="ni ni-menu"></i>
                            {/* </a> */}
                        </div>
                        <div className="ml-auto d-flex">
                            <div>
                                <div className="dropdown-menu dropdown-menu-animated w-auto h-auto">
                                    <div className="dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center rounded-top">
                                        <h4 className="m-0 text-center color-white">
                                            Quick Shortcut
                                            <small className="mb-0 opacity-80">User Applications &amp; Addons</small>
                                        </h4>
                                    </div>
                                    <div className="custom-scroll h-100">
                                        <div className="slimScrollDiv" data-style="position: relative; overflow: hidden; width: auto; height: 100%;"><ul className="app-list" data-style="overflow: hidden; width: auto; height: 100%;">
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-2 icon-stack-3x color-primary-600"/>
                                                        <i className="base-3 icon-stack-2x color-primary-700"/>
                                                        <i className="ni ni-settings icon-stack-1x text-white fs-lg"/>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Services
                                                    </span>
                                                {/* {/* </a> */} 
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-2 icon-stack-3x color-primary-400"></i>
                                                        <i className="base-10 text-white icon-stack-1x"></i>
                                                        <i className="ni md-profile color-primary-800 icon-stack-2x"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Account
                                                    </span>
                                                {/* </a> */} 
                                            </li>
                                            <li>
                                             {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-9 icon-stack-3x color-success-400"></i>
                                                        <i className="base-2 icon-stack-2x color-success-500"></i>
                                                        <i className="ni ni-shield icon-stack-1x text-white"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Security
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-18 icon-stack-3x color-info-700"></i>
                                                        <span className="position-absolute pos-top pos-left pos-right color-white fs-md mt-2 fw-400">28</span>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Calendar
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-7 icon-stack-3x color-info-500"></i>
                                                        <i className="base-7 icon-stack-2x color-info-700"></i>
                                                        <i className="ni ni-graph icon-stack-1x text-white"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Stats
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-4 icon-stack-3x color-danger-500"></i>
                                                        <i className="base-4 icon-stack-1x color-danger-400"></i>
                                                        <i className="ni ni-envelope icon-stack-1x text-white"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Messages
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-4 icon-stack-3x color-fusion-400"></i>
                                                        <i className="base-5 icon-stack-2x color-fusion-200"></i>
                                                        <i className="base-5 icon-stack-1x color-fusion-100"></i>
                                                        <i className="fal fa-keyboard icon-stack-1x color-info-50"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Notes
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-16 icon-stack-3x color-fusion-500"></i>
                                                        <i className="base-10 icon-stack-1x color-primary-50 opacity-30"></i>
                                                        <i className="base-10 icon-stack-1x fs-xl color-primary-50 opacity-20"></i>
                                                        <i className="fal fa-dot-circle icon-stack-1x text-white opacity-85"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Photos
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-19 icon-stack-3x color-primary-400"></i>
                                                        <i className="base-7 icon-stack-2x color-primary-300"></i>
                                                        <i className="base-7 icon-stack-1x fs-xxl color-primary-200"></i>
                                                        <i className="base-7 icon-stack-1x color-primary-500"></i>
                                                        <i className="fal fa-globe icon-stack-1x text-white opacity-85"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Maps
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-5 icon-stack-3x color-success-700 opacity-80"></i>
                                                        <i className="base-12 icon-stack-2x color-success-700 opacity-30"></i>
                                                        <i className="fal fa-comment-alt icon-stack-1x text-white"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Chat
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-5 icon-stack-3x color-warning-600"></i>
                                                        <i className="base-7 icon-stack-2x color-warning-800 opacity-50"></i>
                                                        <i className="fal fa-phone icon-stack-1x text-white"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Phone
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#" className="app-list-item hover-white"> */}
                                                    <span className="icon-stack">
                                                        <i className="base-6 icon-stack-3x color-danger-600"></i>
                                                        <i className="fal fa-chart-line icon-stack-1x text-white"></i>
                                                    </span>
                                                    <span className="app-list-name">
                                                        Projects
                                                    </span>
                                                {/* </a> */}
                                            </li>
                                            <li className="w-100">
                                                {/*  <a href="#" className="btn btn-default mt-4 mb-2 pr-5 pl-5 waves-effect waves-themed"> Add more apps </a> */}
                                            </li>
                                        </ul><div className="slimScrollBar" data-style="background: rgba(0, 0, 0, 0.6); width: 4px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 4px; height: 237.798px;"></div><div className="slimScrollRail" data-style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(250, 250, 250); opacity: 0.2; z-index: 90; right: 4px;"></div></div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {/* <a href="#" data-toggle="dropdown" title="drlantern@gotbootstrap.com" className="header-icon d-flex align-items-center justify-content-center ml-2"> */}
                                    <img src="img/demo/avatars/avatar-admin.png" className="profile-image rounded-circle" alt="Dr. Codex Lantern"/>
									<span className="ml-1 mr-1 text-truncate text-truncate-header hidden-xs-down">Me</span>
									<i className="ni ni-chevron-down hidden-xs-down"></i>
                                {/* </a> */}
                                <div className="dropdown-menu dropdown-menu-animated dropdown-lg">
                                    <div className="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                                        <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                                            <span className="mr-2">
                                                <img src="img/demo/avatars/avatar-admin.png" className="rounded-circle profile-image" alt="Dr. Codex Lantern"/>
                                            </span>
                                            <div className="info-card-text">
                                                <div className="fs-lg text-truncate text-truncate-lg">Dr. Codex Lantern</div>
                                                <span className="text-truncate text-truncate-md opacity-80">drlantern@gotbootstrap.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider m-0"></div>
                                    {/* <a href="#" className="dropdown-item" data-action="app-reset"> */}
                                        <span data-i18n="drpdwn.reset_layout">Reset Layout</span>
                                    {/* </a> */}
                                    {/* <a href="#" className="dropdown-item" data-toggle="modal" data-target=".js-modal-settings"> */}
                                        <span data-i18n="drpdwn.settings">Settings</span>
                                    {/* </a> */}
                                    <div className="dropdown-divider m-0"></div>
                                    {/* <a href="#" className="dropdown-item" data-action="app-fullscreen"> */}
                                        <span data-i18n="drpdwn.fullscreen">Fullscreen</span>
                                        <i className="float-right text-muted fw-n">F11</i>
                                    {/* </a> */}
                                    {/* <a href="#" className="dropdown-item" data-action="app-print"> */}
                                        <span data-i18n="drpdwn.print">Print</span>
                                        <i className="float-right text-muted fw-n">Ctrl + P</i>
                                    {/* </a> */}
                                    <div className="dropdown-multilevel dropdown-multilevel-left">
                                        <div className="dropdown-item">
                                            Language
                                        </div>
                                        <div className="dropdown-menu">
                                        </div>
                                    </div>
                                    <div className="dropdown-divider m-0"></div>
                                    {/* <a className="dropdown-item fw-500 pt-3 pb-3" href="page_login.html"> */}
                                        <span data-i18n="drpdwn.page-logout">Logout</span>
                                        <span className="float-right fw-n">@codexlantern</span>
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>
                    </header>
      <Route exact  path="/" component={Dashboard}/>
      <Route path="/DashboardCorre" component={DashboardCorre}/>
      <Route path="/DashboardHCSC" component={DashboardHCSC}/>
      <Route path="/DashboardBRMS" component={DashboardBRMS}/>
      <Route path="/DashboardBSC" component={DashboardBSC}/>
    </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
