import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

import { SaveSearchButton } from "../../styles/carbonComponents";
import { NavErrorText } from "../../styles/styles.js";
import { RightSmallInlineLoading } from "../../styles/carbonComponents.js";

const textItems = {
    saveSearch: "Save search",
    savedSearch: "Search saved",
    savingSearch: "Seach saving...",
    savingFailed: "Unable to save search",
    savingFailedAtLimit: "Cannot have more than 25 searches"
};

const SaveSearch = () => {
    const appContext = useContext(AppContext);
    const loading = appContext.searchSavedState.loading;
    const error = appContext.searchSavedState.error;
    const searchSaved = appContext.searchSaved;
    const searchTerm = appContext.search.term;
    const setModalOpen = appContext.setSearchSaveModalOpen;
    const searchSavedState = appContext.searchSavedState;

    return (
        searchTerm !== null && (
            <>
                <SaveSearchButton
                    onClick={() => setModalOpen(true)}
                    kind="tertiary"
                    disabled={searchSaved && !error && !searchSavedState.state ? true : false}
                    status={searchSaved ? "finished" : "active"}
                    size="small"
                >
                    {loading
                        ? textItems.savingSearch
                        : searchSaved && !error
                        ? textItems.savedSearch
                        : textItems.saveSearch}
                    {loading && <RightSmallInlineLoading />}
                </SaveSearchButton>
                {(error || searchSavedState.state) && (
                    <NavErrorText>
                        {(searchSavedState.state && searchSavedState.message) || textItems.savingFailed}
                    </NavErrorText>
                )}
            </>
        )
    );
};

export default SaveSearch;
