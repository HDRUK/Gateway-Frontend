import React, { useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { CenterLoading } from "../../styles/carbonComponents";
import { ResultsWrapper } from "../../styles/styles.js";
// import {} from "./styles.js";
import SavedSearchCard from "../../components/savedSearchCard/savedSearchCard.js";

import { useQuery } from "@apollo/react-hooks";
import { GET_SEARCH_SAVED_BY_USER_ID } from "../../queries/queries.js";

const mySearchesPageText = {};

const MySearchesPage = () => {
    const appContext = useContext(AppContext);

    const { data, loading, error } = useQuery(GET_SEARCH_SAVED_BY_USER_ID, { variables: { userId: "TimTest" } });

    if (loading) {
        return <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />;
    }
    if (error) return <div>Error</div>;

    const results =
        data &&
        data.getSearchSavedByUserID.data.map(search => {
            return <SavedSearchCard date={search.createdOn} title={search.detail} />;
        });
    return <ResultsWrapper>{results}</ResultsWrapper>;
};

export default MySearchesPage;
