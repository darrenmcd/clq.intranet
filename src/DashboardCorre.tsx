import React from "react";
 
function DashboardCorre() {
    return (
      <main id="js-page-content" role="main" className="page-content">
      <ol className="breadcrumb page-breadcrumb">
        <li className="breadcrumb-item"></li>
        <li className="breadcrumb-item">Dashboards</li>
        <li className="breadcrumb-item active">Corre</li>
      </ol>
      <div className="subheader">
          <h1 className="subheader-title">
              <i className="subheader-icon fal fa-chart-area"></i> Corre <span className="fw-300">Corre</span>
          </h1>
          <div className="subheader-block d-lg-flex align-items-center">
              <div className="d-inline-flex flex-column justify-content-center mr-3">
                  <span className="fw-300 fs-xs d-block opacity-50">
                      <small>EXPENSES</small>
                  </span>
                  <span className="fw-500 fs-xl d-block color-primary-500">
                      $47,000
                  </span>
              </div>
              <span className="sparklines hidden-lg-down" data-sparktype="bar" data-sparkbarcolor="#886ab5" data-sparkheight="32px" data-sparkbarwidth="5px" data-values="3,4,3,6,7,3,3,6,2,6,4"><canvas width="85" height="32" data-="display: inline-block; width: 85px; height: 32px; vertical-align: top;"></canvas></span>
          </div>
          <div className="subheader-block d-lg-flex align-items-center border-faded border-right-0 border-top-0 border-bottom-0 ml-3 pl-3">
              <div className="d-inline-flex flex-column justify-content-center mr-3">
                  <span className="fw-300 fs-xs d-block opacity-50">
                      <small>MY PROFITS</small>
                  </span>
                  <span className="fw-500 fs-xl d-block color-danger-500">
                      $38,500
                  </span>
              </div>
              <span className="sparklines hidden-lg-down" data-sparktype="bar" data-sparkbarcolor="#fe6bb0" data-sparkheight="32px" data-sparkbarwidth="5px" data-values="1,4,3,6,5,3,9,6,5,9,7"><canvas width="85" height="32" data-style="display: inline-block; width: 85px; height: 32px; vertical-align: top;"></canvas></span>
          </div>
      </div>
  </main>

    );
  }
 
export default DashboardCorre;