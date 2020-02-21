import React from "react";
import ClaimComplete from "../ClaimComplete";
import Date from "./Date";
import ItemType from "./ItemType";
import LossInput from "./LossInput";
import PolicyType from "./PolicyType";
import PoliceReport from "./PoliceReport";
import Price from "./Price";
import PayInfo from "./PayInfo";

import { Route, useLocation, Link } from "react-router-dom";
import { addClaim } from "../../../store/Claims/actions";
import { useDispatch } from "react-redux";

const NewClaimForm = () => {
  const dispatch = useDispatch();

  //   const [inputs, setInputs] = React.useState({
  //     step: 1,
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     occupation: "",
  //     city: "",
  //     bio: ""
  //   });

  const location = useLocation();

  //   const handleChange = e => {
  //     let { name, value } = e.target;
  //     setInputs({
  //       ...inputs,
  //       [name]: value
  //     });
  //   };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     dispatch(addClaim(inputs));
  //   };

  return (
    <div>
      <nav className="container">
        <ul className="steps">
          <li className={location.pathname === "/step1" ? "active" : ""}>
            <Link to="/step1">LossInput</Link>
          </li>
          <li className={location.pathname === "/step2" ? "active" : ""}>
            <Link to="/step2">Date</Link>
          </li>
          <li className={location.pathname === "/step3" ? "active" : ""}>
            <Link to="/step3">PolicyType</Link>
          </li>
          <li className={location.pathname === "/step4" ? "active" : ""}>
            <Link to="/step4">ItemType</Link>
          </li>
          <li className={location.pathname === "/step5" ? "active" : ""}>
            <Link to="/step5">PoliceReport</Link>
          </li>
          <li className={location.pathname === "/step6" ? "active" : ""}>
            <Link to="/step6">Price</Link>
          </li>
          <li className={location.pathname === "/step7" ? "active" : ""}>
            <Link to="/step7">PayInfo</Link>
          </li>
          <li className={location.pathname === "/step8" ? "active" : ""}>
            <Link to="/step8">ClaimComplete</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/step1" component={LossInput} />
      <Route exact path="/step2" component={Date} />
      <Route exact path="/step3" component={PolicyType} />
      <Route exact path="/step4" component={ItemType} />
      <Route exact path="/step5" component={PoliceReport} />
      <Route exact path="/step6" component={Price} />
      <Route exact path="/step7" component={PayInfo} />
      <Route exact path="/step8" component={ClaimComplete} />
    </div>
  );
};

export default NewClaimForm;
