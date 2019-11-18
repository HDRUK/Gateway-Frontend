import React from "react";
// import { AppContext } from "../../../HOC/AppContext/AppContext.js";
import { SelectedFilter, CloseButton } from "../../../styles/styles.js";

const AppliedFilter = () => {
    // const appContext = useContext(AppContext);

    return (
        <SelectedFilter>
            <p>filter</p>
            <CloseButton>x</CloseButton>
        </SelectedFilter>
    );
};

export default AppliedFilter;
