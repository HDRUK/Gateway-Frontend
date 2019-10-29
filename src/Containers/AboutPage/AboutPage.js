import React from "react";
import AppSideNav from "../../components/appSideNav/appSideNav";
import LandingContent from "../LandingContent/LandingContent";
import { SideNavPageWrapper } from "../../styles/styles";

const AboutPage = () => {
    return (
        <div>
            <AppSideNav />
            <SideNavPageWrapper>
                <LandingContent></LandingContent>
            </SideNavPageWrapper>
        </div>
    );
};

export default AboutPage;
