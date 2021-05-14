import React from "react";
import "./style.css";
function AdHome(props) {
  return (
    <>
      {/*Content Row */}

      <div className="row">
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Earnings (Monthly)
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    $40,000
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Earnings (Annual)
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    $215,000
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Tasks
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        50%
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pending Requests Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Pending Requests
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    18
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-comments fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Content Row */}

      {/* chart */}
      <div className="row">
        {/* Content Column */}
        <div className="col-lg-6 mb-4">
          {/* Project Card Example */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              <h4 className="small font-weight-bold">
                Server Migration <span className="float-right">20%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Sales Tracking <span className="float-right">40%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Customer Database <span className="float-right">60%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Payout Details <span className="float-right">80%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Account Setup <span className="float-right">Complete!</span>
              </h4>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          {/* Color System */}
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-primary text-white shadow">
                <div className="card-body">
                  Primary
                  <div className="text-white-50 small">#4e73df</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-success text-white shadow">
                <div className="card-body">
                  Success
                  <div className="text-white-50 small">#1cc88a</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  Info
                  <div className="text-white-50 small">#36b9cc</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-warning text-white shadow">
                <div className="card-body">
                  Warning
                  <div className="text-white-50 small">#f6c23e</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-danger text-white shadow">
                <div className="card-body">
                  Danger
                  <div className="text-white-50 small">#e74a3b</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-secondary text-white shadow">
                <div className="card-body">
                  Secondary
                  <div className="text-white-50 small">#858796</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-light text-black shadow">
                <div className="card-body">
                  Light
                  <div className="text-black-50 small">#f8f9fc</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                  Dark
                  <div className="text-white-50 small">#5a5c69</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          {/* Illustrations */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Illustrations
              </h6>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "25rem" }}
                  src="data:image/jpeg;base64,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"
                  alt="..."
                />
              </div>
              <p>
                Add some quality, svg illustrations to your project courtesy of{" "}
                <a target="_blank" rel="nofollow" href="https://undraw.co/">
                  unDraw
                </a>
                , a constantly updated collection of beautiful svg images that
                you can use completely free and without attribution!
              </p>
              <a target="_blank" rel="nofollow" href="https://undraw.co/">
                Browse Illustrations on unDraw →
              </a>
            </div>
          </div>
          {/* Approach */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Development Approach
              </h6>
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p className="mb-0">
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default AdHome;
