import React from "react";
import CSS from 'csstype';
import { relative } from "path";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  ResponsiveContainer
} from 'recharts';


const exceptionData = [
    {
      name: '09/01/2020', corre: 1, hcsc: 3, bsc: 0, brms: 0,
    },
    {
      name: '09/02/2020', corre: 2, hcsc: 2, bsc: 1, brms: 3,
    },
    {
      name: '09/03/2020', corre: 3, hcsc: 1, bsc: 2, brms: 2,
    },
    {
      name: '09/04/2020', corre: 2, hcsc: 0, bsc: 3, brms: 1,
    },
    {
      name: '09/05/2020', corre: 1, hcsc: 3, bsc: 0, brms: 0,
    },
    {
      name: '09/06/2020', corre: 2, hcsc: 2, bsc: 1, brms: 2,
    },
    {
      name: '09/07/2020', corre: 3, hcsc: 1, bsc: 2, brms: 1,
    },
  ];


  const correData = [
    {
      name: '09/01/2020', loud: 300, silent: 110, pay: 20, pend: 10,
    },
    {
      name: '09/02/2020', loud: 200, silent: 200, pay: 32, pend: 11,
    },
    {
      name: '09/03/2020', loud: 100, silent: 500, pay: 32, pend: 41,
    },
    {
      name: '09/04/2020', loud: 130, silent: 400, pay: 20, pend: 11,
    },
    {
      name: '09/05/2020', loud: 150, silent: 300, pay: 23, pend: 15,
    },
    {
      name: '09/06/2020', loud: 250, silent: 200, pay: 25, pend: 24,
    },
    {
      name: '09/07/2020', loud: 350, silent: 100, pay: 25, pend: 13,
    },
  ];



const panelExceptions: CSS.Properties = {
    opacity: 1,
    left: 0,
    top: 0,
  };



function Dashboard() {
    return (
            <main id="js-page-content" role="main" className="page-content">
                <div className="row">
                <div className="col-lg-8 sortable-grid ui-sortable">
                      <div id="panel-1" className="panel panel-sortable" role="widget" style={panelExceptions}>
                          <div className="panel-hdr" role="heading">
                              <h2 className="ui-sortable-handle">
                                  Corre
                              </h2>
                          </div>
                          <div className="panel-container show" role="content"><div className="loader"><i className="fal fa-spinner-third fa-spin-4x fs-xxl"></i></div>
                            <div className="panel-content poisition-relative">
                                    <div className="pb-5 pt-3">
                                        <div className="row">
                                            <div className="col-2 col-xl-2 d-sm-flex align-items-center">
                                                <div className="p-2 mr-3 bg-info-200 rounded">
                                                    <span className="peity-bar" data-peity="{&quot;fill&quot;: [&quot;#fff&quot;], &quot;width&quot;: 27, &quot;height&quot;: 27 }" style={{display: 'none'}}>3,4,5,8,2</span><svg className="peity" height="27" width="27"><rect data-value="3" fill="#fff" x="0.54" y="16.875" width="4.32" height="10.125"></rect><rect data-value="4" fill="#fff" x="5.94" y="13.5" width="4.319999999999999" height="13.5"></rect><rect data-value="5" fill="#fff" x="11.34" y="10.125" width="4.32" height="16.875"></rect><rect data-value="8" fill="#fff" x="16.740000000000002" y="0" width="4.319999999999997" height="27"></rect><rect data-value="2" fill="#fff" x="22.139999999999997" y="20.25" width="4.320000000000004" height="6.75"></rect></svg>
                                                </div>
                                                <div>
                                                    <label className="fs-sm mb-0">Loud</label>
                                                    <h4 className="font-weight-bold mb-0">1,500</h4>
                                                </div>
                                            </div>
                                            <div className="col-2 col-xl-2 d-sm-flex align-items-center">
                                                <div className="p-2 mr-3 bg-info-200 rounded">
                                                    <span className="peity-bar" data-peity="{&quot;fill&quot;: [&quot;#fff&quot;], &quot;width&quot;: 27, &quot;height&quot;: 27 }" style={{display: 'none'}}>3,4,5,8,2</span><svg className="peity" height="27" width="27"><rect data-value="3" fill="#fff" x="0.54" y="16.875" width="4.32" height="10.125"></rect><rect data-value="4" fill="#fff" x="5.94" y="13.5" width="4.319999999999999" height="13.5"></rect><rect data-value="5" fill="#fff" x="11.34" y="10.125" width="4.32" height="16.875"></rect><rect data-value="8" fill="#fff" x="16.740000000000002" y="0" width="4.319999999999997" height="27"></rect><rect data-value="2" fill="#fff" x="22.139999999999997" y="20.25" width="4.320000000000004" height="6.75"></rect></svg>
                                                </div>
                                                <div>
                                                    <label className="fs-sm mb-0">Silent</label>
                                                    <h4 className="font-weight-bold mb-0">1,100</h4>
                                                    <h4 className="font-weight-bold mb-0"></h4>
                                                </div>
                                            </div>

                                            <div className="col-2 col-xl-2 d-sm-flex align-items-center">
                                                <div className="p-2 mr-3 bg-info-300 rounded">
                                                    <span className="peity-bar" data-peity="{&quot;fill&quot;: [&quot;#fff&quot;], &quot;width&quot;: 27, &quot;height&quot;: 27 }" style={{display: 'none'}}>5,3,1,7,9</span><svg className="peity" height="27" width="27"><rect data-value="5" fill="#fff" x="0.54" y="12" width="4.32" height="15"></rect><rect data-value="3" fill="#fff" x="5.94" y="18" width="4.319999999999999" height="9"></rect><rect data-value="1" fill="#fff" x="11.34" y="24" width="4.32" height="3"></rect><rect data-value="7" fill="#fff" x="16.740000000000002" y="6" width="4.319999999999997" height="21"></rect><rect data-value="9" fill="#fff" x="22.139999999999997" y="0" width="4.320000000000004" height="27"></rect></svg>
                                                </div>
                                                <div>
                                                    <label className="fs-sm mb-0">Pay</label>
                                                    <h4 className="font-weight-bold mb-0">885</h4><h5>(74.35%)</h5>
                                                </div>
                                            </div>
                                            <div className="col-2 col-xl-2 d-sm-flex align-items-center">
                                                <div className="p-2 mr-3 bg-success-300 rounded">
                                                    <span className="peity-bar" data-peity="{&quot;fill&quot;: [&quot;#fff&quot;], &quot;width&quot;: 27, &quot;height&quot;: 27 }" style={{display: 'none'}}>3,4,3,5,5</span><svg className="peity" height="27" width="27"><rect data-value="3" fill="#fff" x="0.54" y="10.8" width="4.32" height="16.2"></rect><rect data-value="4" fill="#fff" x="5.94" y="5.399999999999999" width="4.319999999999999" height="21.6"></rect><rect data-value="3" fill="#fff" x="11.34" y="10.8" width="4.32" height="16.2"></rect><rect data-value="5" fill="#fff" x="16.740000000000002" y="0" width="4.319999999999997" height="27"></rect><rect data-value="5" fill="#fff" x="22.139999999999997" y="0" width="4.320000000000004" height="27"></rect></svg>
                                                </div>
                                                <div>
                                                    <label className="fs-sm mb-0">Pend</label>
                                                    <h4 className="font-weight-bold mb-0">730</h4><h5>(22.35%)</h5>
                                                </div>
                                            </div>
                                            <div className="col-3 col-xl-3 d-sm-flex align-items-center">
                                                <div className="p-2 mr-3 bg-success-300 rounded">
                                                    <span className="peity-bar" data-peity="{&quot;fill&quot;: [&quot;#fff&quot;], &quot;width&quot;: 27, &quot;height&quot;: 27 }" style={{display: 'none'}}>3,4,3,5,5</span><svg className="peity" height="27" width="27"><rect data-value="3" fill="#fff" x="0.54" y="10.8" width="4.32" height="16.2"></rect><rect data-value="4" fill="#fff" x="5.94" y="5.399999999999999" width="4.319999999999999" height="21.6"></rect><rect data-value="3" fill="#fff" x="11.34" y="10.8" width="4.32" height="16.2"></rect><rect data-value="5" fill="#fff" x="16.740000000000002" y="0" width="4.319999999999997" height="27"></rect><rect data-value="5" fill="#fff" x="22.139999999999997" y="0" width="4.320000000000004" height="27"></rect></svg>
                                                </div>
                                                <div>
                                                    <label className="fs-sm mb-0">Transaction Time</label>
                                                    <h4 className="font-weight-bold mb-0">173 ms</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="panel-content poisition-relative">
                                <ResponsiveContainer width='100%' height={229}>
                                    <LineChart
                                        data={correData}
                                        margin={{
                                            top: 5, bottom: 5,
                                        }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="loud" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="silent" stroke="#82ca9d" />
                                        <Line type="monotone" dataKey="pay" stroke="#82ca9d" />
                                        <Line type="monotone" dataKey="pend" stroke="#82ca9d" />
                                    </LineChart>
                            </ResponsiveContainer>
                            </div>
                         </div>
                    </div>
                  </div>
                    <div className="col-lg-4 sortable-grid ui-sortable">
                    <div id="panel-5" className="panel panel-sortable" role="widget">
                        <div className="panel-hdr" role="heading">
                                <h2>
                                    Exceptions
                                </h2>
                                <div className="panel-saving mr-2" style={{display:'none'}}>
                                    <i className="fal fa-spinner-third fa-spin-4x fs-xl"></i>
                                </div>
                        </div>
                        <div className="panel-container show" role="content">
                            <div className="loader"><i className="fal fa-spinner-third fa-spin-4x fs-xxl"></i></div>
                            <div className="panel-content poisition-relative">
                                <ResponsiveContainer width='100%' height={200}>
                                    <LineChart
                                        data={exceptionData}
                                        margin={{
                                            top: 5, bottom: 5,
                                        }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="corre" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="hcsc" stroke="#82ca9d" />
                                        <Line type="monotone" dataKey="bsc" stroke="#82ca9d" />
                                        <Line type="monotone" dataKey="brms" stroke="#82ca9d" />
                                    </LineChart>
                            </ResponsiveContainer>
                            </div>
                            <div className="table-responsive-lg">
                                                <table className="table table-bordered m-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Date/Time</th>
                                                            <th>Platform</th>
                                                            <th>Exception</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">01/01/2020 12:31:59</th>
                                                            <td>Corre</td>
                                                            <td>Summary Exception Goes Here</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">01/01/2020 12:31:59</th>
                                                            <td>BCBS</td>
                                                            <td>Summary Exception Goes Here</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">01/01/2020 12:31:59</th>
                                                            <td>HCSC</td>
                                                            <td>Summary Exception Goes Here</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">

                </div>
                <div className="row">
                  <div className="col-lg-12 sortable-grid ui-sortable">
                      <div id="panel-1" className="panel panel-sortable" role="widget" style={panelExceptions}>
                          <div className="panel-hdr" role="heading">
                              <h2 className="ui-sortable-handle">
                                  HCSC
                              </h2>
                              </div>
                          <div className="panel-container show" role="content"><div className="loader"><i className="fal fa-spinner-third fa-spin-4x fs-xxl"></i></div>
                              <div className="panel-content bg-subtlelight-fade">

                              </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 sortable-grid ui-sortable">
                      <div id="panel-1" className="panel panel-sortable" role="widget" style={panelExceptions}>
                          <div className="panel-hdr" role="heading">
                              <h2 className="ui-sortable-handle">
                                  BSC
                              </h2>
                          </div>
                          <div className="panel-container show" role="content"><div className="loader"><i className="fal fa-spinner-third fa-spin-4x fs-xxl"></i></div>
                              <div className="panel-content bg-subtlelight-fade">

                              </div>
                          </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 sortable-grid ui-sortable">
                      <div id="panel-1" className="panel panel-sortable" role="widget" style={panelExceptions}>
                          <div className="panel-hdr" role="heading">
                              <h2 className="ui-sortable-handle">
                                  BRMS
                              </h2>
                              </div>
                          <div className="panel-container show" role="content"><div className="loader"><i className="fal fa-spinner-third fa-spin-4x fs-xxl"></i></div>
                              <div className="panel-content bg-subtlelight-fade">
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            
            </main>
    );
}
 
export default Dashboard;