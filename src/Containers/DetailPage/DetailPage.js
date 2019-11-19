import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CenterLoading } from "../../styles/carbonComponents";
import {
    Heading,
    SmallSpace,
    SmallHeading,
    SmallText,
    TinyText,
    LightText,
    DarkText,
    TinySpace
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
                        <Heading>{data.hdrDataModelID.data.label}</Heading>
                        <TinySpace />
                        <TinyText>
                            <LightText>PUBLISHER</LightText>
                        </TinyText>
                        <SmallText>{data.hdrDataModelID.data.author}</SmallText>
                        <TinySpace />
                        <SmallHeading>abstract - </SmallHeading>
                        <p>{data.hdrDataModelID.data.description}</p>
                        <TinySpace />
                        <TinyText>ORG{data.hdrDataModelID.data.organisation}</TinyText>
                        <p>EDIT{data.hdrDataModelID.data.editable}</p>
                        <p>DOC VER{data.hdrDataModelID.data.documentationVersion}</p>
                        <p>LAST UPDATED{data.hdrDataModelID.data.lastUpdated}</p>
                        <p>TYPE{data.hdrDataModelID.data.type}</p>
                        <p>FINAL{data.hdrDataModelID.data.finalised}</p>
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
