import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { CenterLoading } from "../../styles/carbonComponents";
import { ResultsWrapper } from "../../styles/styles.js";
import SavedSearchCard from "../../components/savedSearchCard/savedSearchCard.js";

import { useQuery } from "@apollo/react-hooks";
import { GET_SEARCH_SAVED_BY_USER_ID } from "../../queries/queries.js";

const mySearchesPageText = {};

const MySearchesPage = () => {
    const appContext = useContext(AppContext);
    const runSearch = appContext.returnSearchResults;
    const userId = appContext.userId;

    const { data, loading, error } = useQuery(GET_SEARCH_SAVED_BY_USER_ID, { variables: { userId: userId } });

    if (loading) {
        return <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />;
    }
    if (error) return <div>Error</div>;

    const results =
        data &&
        data.getSearchSavedByUserID &&
        data.getSearchSavedByUserID.data &&
        data.getSearchSavedByUserID.data.length > 0 ? (
            data.getSearchSavedByUserID.data.map((search, i) => {
                return (
                    <SavedSearchCard
                        key={`savedSearchCard-${i}`}
                        date={search.createdOn}
                        title={search.detail}
                        filters={search.filters}
                        runSearch={() => runSearch(search.detail)}
                    />
                );
            })
        ) : (
            <p>No saved searches</p>
        );
    return <ResultsWrapper>{results}</ResultsWrapper>;
};

export default MySearchesPage;
