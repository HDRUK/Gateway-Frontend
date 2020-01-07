import React, { useContext } from "react";
import { FilterDiv } from "../../../styles/styles.js";
import FilterBox from "../filterBox/filterBox.js";

import { AppContext } from "../../../HOC/AppContext/AppContext.js";

const MenuFilterWrapper = () => {
    const appContext = useContext(AppContext);
    const modalVisibility = appContext.state.modalVisibility;

    const filterLocation = appContext.state.filterLocation + appContext.state.windowScroll;

    return (
        <React.Fragment>
            {modalVisibility && (
                <FilterDiv location={filterLocation} modalVisibility={modalVisibility}>
                    <FilterBox />
                    <div ref={appContext.filterDivRef} />
                </FilterDiv>
            )}
        </React.Fragment>
    );
};
export default MenuFilterWrapper;
