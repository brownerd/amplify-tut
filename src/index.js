import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./Application";

import Amplify from "aws-amplify";
import configuration from "./aws-exports";

import { Auth } from "aws-amplify";

Amplify.configure(configuration);

ReactDOM.render(<Application />, document.getElementById("root"));
