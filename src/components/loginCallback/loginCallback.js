import React from "react";
import { Redirect } from "react-router-dom";
import * as qs from "query-string";

import PropTypes from "prop-types";

const LoginCallback = props => {
    const parsedURL = qs.parse(props.location.search);
    localStorage.setItem("userId", parsedURL.id);
    localStorage.setItem("userEmail", parsedURL.email);
    return <Redirect to={parsedURL.route} />;
};

LoginCallback.propTypes = {
    location: PropTypes.node.isRequired
};

export default LoginCallback;
