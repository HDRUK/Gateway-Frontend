import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import * as qs from "query-string";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

import PropTypes from "prop-types";

const LoginCallback = props => {
    const appContext = useContext(AppContext);
    const parsedURL = qs.parse(props.location.search);
    appContext.setUser(parsedURL.id, parsedURL.email);
    appContext.checkAuthenticated();
    return <Redirect to={parsedURL.route} />;
};

LoginCallback.propTypes = {
    location: PropTypes.node.isRequired
};

export default LoginCallback;
