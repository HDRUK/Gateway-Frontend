import React from "react";
import LandingContent from "../LandingContent/LandingContent";
import AppSideNav from "../../components/appSideNav/appSideNav";
import { SideNavPageWrapper } from "../../styles/styles";

const SearchPage = () => {
    return (
        <div>
            <AppSideNav />
            <SideNavPageWrapper>
                <LandingContent />
            </SideNavPageWrapper>
        </div>
    );
};

export default SearchPage;
