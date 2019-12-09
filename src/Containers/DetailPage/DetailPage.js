import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CenterLoading, NewStyledButton } from "../../styles/carbonComponents";
import {
    StyledHeading,
    SmallSpace,
    StyledSmallText,
    StyledSmallBoldText,
    TinyText,
    LightText,
    DarkText,
    TinySpace,
    InfoGrid,
    GridItem
} from "../../styles/styles";
import PropTypes from "prop-types";

import { RESULT_DETAIL } from "../../queries/queries.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { withRouter } from "react-router-dom";
import InfoCard from "../../components/infoCard/infoCard";

const DetailPage = props => {
    const appContext = useContext(AppContext);
    props.match.params.id !== appContext.state.searchResultId && appContext.setSearchResultId(props.match.params.id);
    const { loading, error, data } = useQuery(RESULT_DETAIL, {
        variables: { ID: appContext.state.searchResultId },
        skip: appContext.state.searchResultId === null
    });
    if (loading) return <CenterLoading />;
    if (error) return <div>Error :(</div>;

    data && appContext.setDetailData(data.hdrDataModelID.data);

    return (
        <React.Fragment>
            {data && (
                <SmallSpace>
                    <DarkText>
                        <StyledHeading>{data.hdrDataModelID.data.title || "Title Unknown"}</StyledHeading>
                        <TinySpace />
                        <NewStyledButton>Request Access</NewStyledButton>
                        <TinySpace />
                        <InfoGrid>
                            <GridItem>
                                <TinyText>
                                    <LightText>RELEASE DATE</LightText>
                                </TinyText>
                                <StyledSmallBoldText>
                                    {data.hdrDataModelID.data.author && data.hdrDataModelID.data.author}
                                </StyledSmallBoldText>
                            </GridItem>
                            <GridItem>
                                <TinyText>
                                    <LightText>PUBLISHER</LightText>
                                </TinyText>
                                <StyledSmallBoldText>
                                    {data.hdrDataModelID.data.organisation && data.hdrDataModelID.data.organisation}
                                </StyledSmallBoldText>
                            </GridItem>
                        </InfoGrid>
                        <TinySpace />
                        <StyledSmallText>
                            {data.hdrDataModelID.data.description && data.hdrDataModelID.data.description}
                        </StyledSmallText>
                        <TinySpace />
                        <StyledHeading>Data Access</StyledHeading>
                        <TinySpace />
                        <InfoCard
                            contents={[
                                { title: "author", content: "firstAuthor" },
                                { title: "organisation", content: "firstOrg" }
                            ]}
                            link="View access rights"
                        ></InfoCard>
                        <InfoCard
                            contents={[
                                { title: "author", content: "firstAuthor" },
                                { title: "organisation", content: "firstOrg" }
                            ]}
                        ></InfoCard>
                        <TinySpace />
                    </DarkText>
                </SmallSpace>
            )}
        </React.Fragment>
    );
};

DetailPage.propTypes = {
    match: PropTypes.object
};

export default withRouter(DetailPage);
