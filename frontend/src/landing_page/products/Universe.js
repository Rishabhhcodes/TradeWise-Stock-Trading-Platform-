import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media\smallcaseLogo.png" />
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5" style={{ width: "100", height: "100" }}>
          <img src="media\streak-logo.png" />
          <p className="text-muted text-small">Algo & Strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\sensibullLogo.svg" />
          <p className="text-muted text-small">Options Trading platform</p>
        </div>
        <div
          className="col-4 p-3 mt-5"
          style={{ width: "50 px", height: "50 px" }}
        >
          <img src="media\zerodhaFundhouse.png" />
          <p className="text-muted text-small">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\goldenpiLogo.png" />
          <p className="text-muted text-small">Bond Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\dittoLogo.png" />
          <p className="text-muted text-small">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
