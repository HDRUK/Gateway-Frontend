import React, { useContext } from "react";
import { MainSideNav } from "../../styles/carbonComponents";
import FilterMenu from "../filters/filterMenu/filterMenu.js";
import PropTypes from "prop-types";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import SaveSearch from "../../components/saveSearch/saveSearch.js";

import { Link } from "react-router-dom";

const AboutPageNavigation = () => (
    <div>
        <Link to="innovation">
            <div>Innovation Gateway</div>
        </Link>
        <Link to="guidelines">
            <div>Guidelines</div>
        </Link>
    </div>
);

const AppSideNav = props => {
    const appContext = useContext(AppContext);
    return (
        <div id="main-side-nav">
            <MainSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
                {props.about && <AboutPageNavigation />}
                {props.filter && (
                    <React.Fragment>
                        {appContext.authenticated === "true" && <SaveSearch />}
                        <FilterMenu />
                    </React.Fragment>
                )}
            </MainSideNav>
        </div>
    );
};

AppSideNav.propTypes = {
    filter: PropTypes.bool
};
export default AppSideNav;
