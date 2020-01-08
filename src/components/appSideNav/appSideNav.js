import React, { useContext } from "react";
import { MainSideNav } from "../../styles/carbonComponents";
import FilterMenu from "../filters/filterMenu/filterMenu.js";
import PropTypes from "prop-types";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import SaveSearch from "../../components/saveSearch/saveSearch.js";
import SideNavLinks from "../../components/sideNavLinks/SideNavLinks.js";
import SaveSearchModal from "../../components/saveSearchModal/saveSearchModal.js";

const AppSideNav = props => {
    const appContext = useContext(AppContext);
    return (
        <div id="main-side-nav">
            {/* TODO: Set to be authenticated */}
            <SaveSearchModal />
            <MainSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
                {props.about && <SideNavLinks />}
                {props.filter && (
                    <React.Fragment>
                        {/* TODO: Set to be authenticated */}
                        {/* {appContext.authenticated && <SaveSearch />} */}
                        <SaveSearch />
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
