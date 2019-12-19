import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { InvertedHeaderText, WidthWrapper } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import { LinkNoDecoration } from "../../styles/styles.js";
import {
    BigHeaderWrapper,
    BigHeaderImage,
    HeaderAlignment,
    HeaderAlignmentItem,
    HeaderSpacer,
    HeaderLink
} from "./styles.js";
import Login from "../../components/login/login";
import gateway_logo_svg from "../../assets/gateway_main_white.svg";

const headerText = {
    header: "Innovation Gateway",
    login: "Login via OpenAthens",
    logout: "Logout",
    continue: "Continue as a guest"
};

const BigHeader = () => {
    const appContext = useContext(AppContext);
    const useDatasetCount = appContext.useDatasetCount;

    useDatasetCount();

    return (
        <BigHeaderWrapper aria-label="HDR UK Innovation Gateway">
            <WidthWrapper>
                <BigHeaderImage src={gateway_logo_svg} />
                <Login />
                {/* <HeaderAlignment>
                    <HeaderAlignmentItem>
                        <LinkNoDecoration to="/">
                            <InvertedHeaderText>{headerText.header}</InvertedHeaderText>
                        </LinkNoDecoration>
                    </HeaderAlignmentItem>

                    <HeaderAlignmentItem>
                        <HeaderSpacer />
                    </HeaderAlignmentItem>

                    <HeaderAlignmentItem>
                        {appContext.state.datasetCount && (
                            <InvertedHeaderText>{appContext.state.datasetCount} datasets available</InvertedHeaderText>
                        )}
                    </HeaderAlignmentItem>

                    <HeaderAlignmentItem right>
                        {appContext.authenticated ? (
                            <HeaderLink href="/logout">
                                <InvertedHeaderText>{headerText.logout}</InvertedHeaderText>
                            </HeaderLink>
                        ) : (
                            <HeaderLink href="/login">
                                <InvertedHeaderText>{headerText.login}</InvertedHeaderText>
                            </HeaderLink>
                        )}
                    </HeaderAlignmentItem>

                    <HeaderAlignmentItem right>
                        <HeaderSpacer />
                    </HeaderAlignmentItem>

                    {appContext.userEmail && (
                        <HeaderAlignmentItem right>
                            <InvertedHeaderText>{appContext.userEmail}</InvertedHeaderText>
                        </HeaderAlignmentItem>
                    )}
                </HeaderAlignment> */}
            </WidthWrapper>
        </BigHeaderWrapper>
    );
};

export default BigHeader;
