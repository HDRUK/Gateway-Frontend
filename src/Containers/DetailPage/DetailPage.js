import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CenterLoading } from "../../styles/carbonComponents";
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
                <div>
                    <p>{data.hdrDataModelID.data.id}</p>
                    <p>{data.hdrDataModelID.data.domainType}</p>
                    <p>{data.hdrDataModelID.data.label}</p>
                    <p>{data.hdrDataModelID.data.description}</p>
                    <p>{data.hdrDataModelID.data.author}</p>
                    <p>{data.hdrDataModelID.data.organisation}</p>
                    <p>{data.hdrDataModelID.data.editable}</p>
                    <p>{data.hdrDataModelID.data.documentationVersion}</p>
                    <p>{data.hdrDataModelID.data.lastUpdated}</p>
                    <p>{data.hdrDataModelID.data.type}</p>
                    <p>{data.hdrDataModelID.data.finalised}</p>
                </div>
            )}
        </React.Fragment>
    );
};

DetailPage.propTypes = {
    match: PropTypes.object
};

export default withRouter(DetailPage);
