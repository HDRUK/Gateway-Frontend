import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { InvertedHeaderText, WidthWrapper } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import { LinkNoDecoration } from "../../styles/styles.js";
import { HeaderAlignment, HeaderAlignmentItem, HeaderSpacer, HeaderLink } from "./styles.js";

const headerText = {
    header: "Innovation Gateway",
    login: "Login",
    logout: "Logout"
};

const Header = () => {
    const appContext = useContext(AppContext);
    const useDatasetCount = appContext.useDatasetCount;

    useDatasetCount();

    return (
        <HeaderWrapper aria-label="HDR UK Innovation Gateway">
            <WidthWrapper>
                <HeaderAlignment>
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
                            <InvertedHeaderText>
                                {`Discover & Explore ${appContext.state.datasetCount} datasets`}
                            </InvertedHeaderText>
                        )}
                    </HeaderAlignmentItem>

                    <HeaderAlignmentItem right>
                        {appContext.authenticated ? (
                            <HeaderLink
                                href="/logout"
                                onClick={() => {
                                    window.open("https://login.openathens.net/signout");
                                }}
                            >
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
                </HeaderAlignment>
            </WidthWrapper>
        </HeaderWrapper>
    );
};

export default Header;
