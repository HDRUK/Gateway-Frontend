import React from "react";
import AppSideNav from "../../components/appSideNav/appSideNav";
import Search from "../../components/search/search";
import { SideNavPageWrapper, ContentWrapper, SideStripeLeft, SideStripeRight } from "../../styles/styles";

const SearchPage = () => {
    return (
        <div>
            <AppSideNav />
            <SideNavPageWrapper>
                <ContentWrapper>
                    <SideStripeLeft />
                    <SideStripeRight />
                    <Search></Search>
                </ContentWrapper>
            </SideNavPageWrapper>
        </div>
    );
};

export default SearchPage;
