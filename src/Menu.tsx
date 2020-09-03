import React from 'react';

function Menu() {
    return (
    <aside className="page-sidebar">
        <div className="page-logo">
            {/* <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut"> */}
                <img src="img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo"/>
                <span className="page-logo-text mr-1">SmartAdmin WebApp</span>
                <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"/>
                <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"/>
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
            <div className="info-card">
                <img src="img/demo/avatars/avatar-admin.png" className="profile-image rounded-circle" alt="Dr. Codex Lantern"/>
                <div className="info-card-text">
                    {/* <a href="#" className="d-flex align-items-center text-white">
                        <span className="text-truncate text-truncate-sm d-inline-block">
                            Dr. Codex Lantern
                        </span>
                    </a> */}
                    <span className="d-inline-block text-truncate text-truncate-sm">Toronto, Canada</span>
                </div>
                <img src="img/card-backgrounds/cover-2-lg.png" className="cover" alt="cover"/>
                {/* <a href="#" data-onclick="return false;" className="pull-trigger-btn" data-action="toggle" data-className="list-filter-active" data-target=".page-sidebar" data-focus="nav_filter_input">
                    <i className="fal fa-angle-down"/>
                </a> */}
            </div>
            <ul id="js-nav-menu" className="nav-menu js-nav-built">
                <li className="active">
                    {/* <a href="#" title="Application Intel" data-filter-tags="application intel" aria-expanded="false" className=" waves-effect waves-themed"> */}
                        <i className="fal fa-info-circle"></i>
                        <span className="nav-link-text" data-i18n="nav.application_intel">Application Intel</span>
                    <b className="collapse-sign"><em className="fal fa-angle-down"></em></b>
                    {/* </a> */}
                    <ul  style={{ display: 'none' }}>
                        <li className="active">
                            {/* <a href="intel_analytics_dashboard.html" title="Analytics Dashboard" data-filter-tags="application intel analytics dashboard" className=" waves-effect waves-themed"> */}
                                <span className="nav-link-text" data-i18n="nav.application_intel_analytics_dashboard">Analytics Dashboard</span>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <a href="intel_marketing_dashboard.html" title="Marketing Dashboard" data-filter-tags="application intel marketing dashboard" className=" waves-effect waves-themed"> */}
                                <span className="nav-link-text" data-i18n="nav.application_intel_marketing_dashboard">Marketing Dashboard</span>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <a href="intel_introduction.html" title="Introduction" data-filter-tags="application intel introduction" className=" waves-effect waves-themed"> */}
                                <span className="nav-link-text" data-i18n="nav.application_intel_introduction">Introduction</span>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <a href="intel_privacy.html" title="Privacy" data-filter-tags="application intel privacy" className=" waves-effect waves-themed"> */}
                                <span className="nav-link-text" data-i18n="nav.application_intel_privacy">Privacy</span>
                            {/* </a> */}
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
        )
}

export default Menu;
