
import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from './util/session_api_util';
import {signup} from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);


  window.signup = signup;
  window.login= APIUtil.login ;
  window.logout= APIUtil.logout;

});