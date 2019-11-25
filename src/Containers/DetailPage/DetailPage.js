import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CenterLoading } from "../../styles/carbonComponents";
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
import PropTypes from "prop-types";

import { RESULT_DETAIL } from "../../queries/queries.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { withRouter } from "react-router-dom";

const DetailPage = props => {
    const appContext = useContext(AppContext);
    props.match.params.id !== appContext.state.searchResultId && appContext.setSearchResultId(props.match.params.id);
    const { loading, error, data } = useQuery(RESULT_DETAIL, {
        variables: { ID: appContext.state.searchResultId },
        skip: appContext.state.searchResultId === undefined
    });
    if (loading) return <CenterLoading />;
    if (error) return <div>Error :(</div>;

    return (
        <React.Fragment>
            {data && (
                <SmallSpace>
                    <DarkText>
                        <TinyText>
                            <LightText>LAST UPDATED</LightText>
                            <BlueText>
                                <SmallText>
                                    {data.hdrDataModelID.data.lastUpdated &&
                                        data.hdrDataModelID.data.lastUpdated.split("T")[0]}
                                </SmallText>
                            </BlueText>
                        </TinyText>
                        <TinySpace />
                        <Heading>{data.hdrDataModelID.data.label && data.hdrDataModelID.data.label}</Heading>
                        <TinySpace />
                        <InfoGrid>
                            <GridItem>
                                <TinyText>
                                    <LightText>AUTHOR</LightText>
                                </TinyText>
                                <SmallText>
                                    {data.hdrDataModelID.data.author && data.hdrDataModelID.data.author}
                                </SmallText>
                            </GridItem>
                            <GridItem>
                                <TinyText>
                                    <LightText>ORGANISATION</LightText>
                                </TinyText>
                                <SmallText>
                                    {data.hdrDataModelID.data.organisation && data.hdrDataModelID.data.organisation}
                                </SmallText>
                            </GridItem>
                        </InfoGrid>
                        <TinySpace />

                        <BoldInlineText>abstract - </BoldInlineText>
                        <InlineWrappedText>
                            {data.hdrDataModelID.data.description && data.hdrDataModelID.data.description}
                        </InlineWrappedText>
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
