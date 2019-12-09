import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CenterLoading, NewStyledButton } from "../../styles/carbonComponents";
import {
    StyledHeading,
    SmallSpace,
    StyledSmallText,
    DarkText,
    TinySpace,
    StyledCard,
    Arrow,
    LinkText
} from "../../styles/styles";
import PropTypes from "prop-types";

import { RESULT_DETAIL } from "../../queries/queries.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { withRouter } from "react-router-dom";
import InfoDetailGrid from "../../components/infoDetailGrid/infoDetailGrid";

const DetailPage = props => {
    const appContext = useContext(AppContext);
    props.match.params.id !== appContext.state.searchResultId && appContext.setSearchResultId(props.match.params.id);
    const { loading, error, data } = useQuery(RESULT_DETAIL, {
        variables: { ID: appContext.state.searchResultId },
        skip: appContext.state.searchResultId === null
    });
    if (loading) return <CenterLoading />;
    if (error) return <div>Error :(</div>;

    let detailData = {};

    let dataAccess = [];
    let coverage = [];
    let relatedDatasets = [];
    let attributions = [];
    return (
        <React.Fragment>
            {data && (detailData = data.hdrDataModelID.data) && (
                <SmallSpace>
                    <DarkText>
                        <StyledHeading>{detailData.title || "Title Unknown"}</StyledHeading>
                        <TinySpace />
                        <NewStyledButton>Request Access</NewStyledButton>
                        <TinySpace />
                        <InfoDetailGrid
                            contents={[
                                { title: "Date released", content: detailData.releaseDate || "Not specified" },
                                { title: "Publisher", content: detailData.publisher || "Not specified" },
                                { title: "License", content: detailData.license || "Not specified" },
                                { title: "Request time", content: detailData.accessRequestDuration || "Not specified" },
                                { title: "Standard", content: detailData.conformsTo || "Not specified" }
                            ]}
                        ></InfoDetailGrid>
                        <TinySpace />
                        <StyledSmallText>{detailData.abstract || "Not specified"}</StyledSmallText>
                        <TinySpace />
                        {detailData.description && (
                            <LinkText href={detailData.description}>
                                <StyledCard>
                                    Link to description
                                    <Arrow />
                                </StyledCard>
                            </LinkText>
                        )}
                        <StyledHeading>Data Access</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            {
                                ((dataAccess = [
                                    {
                                        title: "Access request cost",
                                        content: detailData.accessRequestCost || "Not specified"
                                    }
                                ]),
                                detailData.dataController &&
                                    dataAccess.push({ title: "Data controller", content: detailData.dataController }),
                                detailData.dataProcessor &&
                                    dataAccess.push({ title: "Data processor", content: detailData.dataProcessor }),
                                detailData.accessRights &&
                                    dataAccess.push({ title: "Access rights", content: detailData.accessRights }))
                            }
                            <InfoDetailGrid contents={dataAccess}></InfoDetailGrid>
                        </StyledCard>
                        <StyledHeading>Coverage</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            {
                                ((coverage = [
                                    {
                                        title: "Jurisdiction",
                                        content: detailData.jurisdiction || "Not specified"
                                    },
                                    {
                                        title: "Geographic coverage",
                                        content: detailData.geographicCoverage || "Not specified"
                                    },
                                    {
                                        title: "Dataset start date",
                                        content: detailData.datasetStartDate || "Not specified"
                                    },
                                    {
                                        title: "Dataset end date",
                                        content: detailData.datasetEndDate || "Not specified"
                                    }
                                ]),
                                detailData.periodicity &&
                                    coverage.push({ title: "Periodicity", content: detailData.periodicity }))
                            }
                            <InfoDetailGrid contents={coverage}></InfoDetailGrid>
                        </StyledCard>
                        <StyledHeading>Demographics</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            <InfoDetailGrid
                                contents={[
                                    {
                                        title: "Statistical population",
                                        content: detailData.statisticalPopulation || "Not specified"
                                    },
                                    { title: "Age band", content: detailData.ageBand || "Not specified" }
                                ]}
                            ></InfoDetailGrid>
                        </StyledCard>
                        <StyledHeading>Related Resources</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            <InfoDetailGrid
                                contents={[
                                    {
                                        title: "Physical sample availability",
                                        content: detailData.physicalSampleAvailability || "Not specified"
                                    }
                                ]}
                            ></InfoDetailGrid>
                        </StyledCard>
                        {(detailData.group || detailData.linkedDataset || detailData.derivedDatasets) && (
                            <React.Fragment>
                                {
                                    (detailData.group &&
                                        relatedDatasets.push({ title: "Group", content: detailData.group }),
                                    detailData.linkedDataset &&
                                        relatedDatasets.push({
                                            title: "Linked datasets",
                                            content: detailData.linkedDataset
                                        }),
                                    detailData.derivedDatasets &&
                                        relatedDatasets.push({
                                            title: "Derived datasets",
                                            content: detailData.derivedDatasets
                                        }))
                                }
                                <StyledHeading>Related Datasets</StyledHeading>
                                <TinySpace />
                                <StyledCard>
                                    <InfoDetailGrid contents={relatedDatasets}></InfoDetailGrid>
                                </StyledCard>
                            </React.Fragment>
                        )}
                        {(detailData.creator || detailData.citations) && (
                            <React.Fragment>
                                {
                                    (detailData.creator &&
                                        attributions.push({ title: "Creator", content: detailData.creator }),
                                    detailData.citations &&
                                        attributions.push({
                                            title: "Citations",
                                            content: detailData.citations
                                        }))
                                }
                                <StyledHeading>Attributions</StyledHeading>
                                <TinySpace />
                                <StyledCard>
                                    <InfoDetailGrid contents={attributions}></InfoDetailGrid>
                                </StyledCard>
                            </React.Fragment>
                        )}
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
