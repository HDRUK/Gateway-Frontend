import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { useMutation } from "@apollo/react-hooks";
import { SEARCH_SAVE } from "../../queries/queries.js";

import { SaveSearchButton } from "../../styles/carbonComponents";
import { NavErrorText } from "../../styles/styles.js";
import { RightSmallInlineLoading } from "../../styles/carbonComponents.js";

const textItems = {
    save: "Save",
    cancel: "Cancel",
    saveSearch: "Save search",
    savedSearch: "Search saved",
    savingSearch: "Seach saving...",
    savingFailed: "Unable to save search",
    savingFailedAtLimit: "Cannot have more than 25 searches",
    rename: "Rename",
    error: {
        tooLong: "Name must be less than 100 characters long"
    },
    aria: {
        renameAndSaveSearch: "Rename and save search."
    },
    enterTextHere: "Enter text here..."
};

const SaveSearch = () => {
    const appContext = useContext(AppContext);
    const [saveSearch, { loading, error, data }] = useMutation(SEARCH_SAVE);
    const searchSaved = appContext.searchSaved;
    const searchTerm = appContext.search.term;
    const setSearchSaved = appContext.setSearchSaved;
    const [modalOpen, setModalOpen] = useState(false);
    const [rename, setRename] = useState("");
    const [renameInvalid, setRenameInvalid] = useState(false);
    const [searchSavedError, setSearchSavedError] = useState({
        state: false,
        status: null,
        message: null
    });

    let saveVariables = {
        searchAuditId: appContext.search.latestSearchAuditLogId,
        userId: appContext.userId
    };

    const closeModal = () => {
        setModalOpen(false);
        setRename("");
        renameInvalid && setRenameInvalid(false);
    };

    useEffect(() => {
        if (data && data.searchSave.status === "403") {
            setSearchSavedError({
                state: true,
                ...data.searchSave
            });
            setSearchSaved(false);
        }
    }, [data, setSearchSaved]);

    return (
        searchTerm !== null && (
            <>
                <SaveSearchButton
                    onClick={() => setModalOpen(true)}
                    kind="tertiary"
                    disabled={searchSaved && !error && !searchSavedError.state ? true : false}
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
                {(error || searchSavedError.state) && (
                    <NavErrorText>
                        {(searchSavedError.state && searchSavedError.message) || textItems.savingFailed}
                    </NavErrorText>
                )}
            </>
        )
    );
};

export default SaveSearch;
