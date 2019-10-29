import React from "react";
import LandingContent from "../LandingContent/LandingContent";
import Login from "../../components/login/login";
import { LargeSpace } from "../../styles/styles.js";

const LandingPage = () => {
    return (
        <div>
            <LargeSpace />
            <Login />
            <LandingContent />
        </div>
    );
};

export default LandingPage;
