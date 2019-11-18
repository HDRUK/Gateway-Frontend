import React, { useContext } from "react";
import { FilterDiv } from "../../../styles/styles.js";
import FilterBox from "../filterBox/filterBox.js";

import { AppContext } from "../../../HOC/AppContext/AppContext.js";

const MenuFilterWrapper = () => {
    const appContext = useContext(AppContext);
    const modalVisibility = appContext.state.modalVisibility;

    return (
        <React.Fragment>
            {!modalVisibility && <div />}

            {modalVisibility && (
                <FilterDiv
                    location={appContext.state.filterLocation + appContext.state.windowScroll}
                    modalVisibility={modalVisibility}
                >
                    <FilterBox />
                </FilterDiv>
            )}
        </React.Fragment>
    );
};
export default MenuFilterWrapper;
