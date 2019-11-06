import React, { useContext } from "react";
import { FilterDiv } from "../../styles/styles.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

const MenuFilterWrapper = () => {
    const appContext = useContext(AppContext);
    const modalVisibility = appContext.state.modalVisibility;
    return (
        <React.Fragment>
            {!modalVisibility && <div />}

            {modalVisibility && <FilterDiv modalVisibility={modalVisibility} />}
        </React.Fragment>
    );
};
export default MenuFilterWrapper;
