import React, { useContext } from "react";
import {
    Heading,
    SmallSpace,
    BoldInlineText,
    SmallText,
    TinyText,
    LightText,
    DarkText,
    TinySpace,
    InfoGrid,
    GridItem,
    InlineWrappedText,
    BlueText
} from "../../styles/styles";

import { withRouter } from "react-router-dom";

const NotFound = props => {
    return (
        <React.Fragment>
            <SmallSpace>
                <DarkText>This page does not exists........</DarkText>
            </SmallSpace>
        </React.Fragment>
    );
};

export default withRouter(NotFound);
