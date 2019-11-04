import React, { useContext } from "react";
import Search from "../../components/search/search";
import { SearchBar } from "../../styles/carbonComponents.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

const SearchPage = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const returnSearchResults = appContext.returnSearchResults;
    return (
        <React.Fragment>
            {pageState === "form" && <Search identifier="searchHeader" />}

            {pageState === "results" && <SearchBar labelText="Search" onKeyPress={returnSearchResults} />}
        </React.Fragment>
    );
};

export default SearchPage;
