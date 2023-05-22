import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [statusModalTitle, setStatusModalTitle] = useState("");
  const [statusModalDescription, setStatusModalDescription] = useState("");
  const setIsLoggedIn = props.setIsLoggedIn;
  const setAccountInfo = props.setAccountInfo;
  const history = useHistory();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const params = {
      email: email,
      password: password,
    };

    // const resp = await loginAccount(params);
    // if (!resp.status) {
    //   setIsLoggedIn(true);
    //   setAccountInfo(resp);
    //   history.push(HOME_ROUTE);
    // } else {
    //   setStatusModalTitle("Error Logging in");
    //   setStatusModalDescription(TRY_AGAIN_LATER_MSG);
    //   setShowStatus(true);
    // }
  };

  const handleCreateAccount = () => {
    props.setDisplay("createAccount");
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "25px", width: "100%", border: "3px solid gray", marginRight: "1rem" }} className="p-3">
        <button
          className="bg-black p-1 align-self-start"
          aria-label="back"
          onClick={() => props.setDisplay("")}
        >
          Back
        </button>
        <h2 className="text-center" style={{ fontSize: "22px" }}>
          Sign In
        </h2>
        {/* showStatus ?
          <StatusModal
            title={statusModalTitle}
            description={statusModalDescription}
            open={showStatus}
            handleClose={() => setShowStatus(false)}
          /> :
          "" */}
        <form onSubmit={handleOnSubmit} className="d-flex flex-column">
          <div className="form align-items-center">
            <div className="form-group col-md-4">
              <label htmlFor="exampleInputEmail1">Email *</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="exampleInputPassword1">Password *</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div>Don't have an account?</div>
          <button onClick={handleCreateAccount}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
