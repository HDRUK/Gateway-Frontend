import React from "react";
import { SmallSpace, DarkText } from "../../styles/styles";

import { withRouter } from "react-router-dom";

const NotFound = props => {
    return (
        <React.Fragment>
            <SmallSpace>
                <DarkText>This page does not exist........</DarkText>
            </SmallSpace>
        </React.Fragment>
    );
};

export default withRouter(NotFound);
