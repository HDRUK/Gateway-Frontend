import React, { useContext, useState } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { useMutation } from "@apollo/react-hooks";
import { SEARCH_SAVE } from "../../queries/queries.js";

import { Modal, TextInput } from "carbon-components-react";
import { SaveSearchButton, RightSmallInlineLoading } from "./styles.js";

const textItems = {
    saveSearch: "Save search",
    savedSearch: "Search saved"
};

const SaveSearch = () => {
    const appContext = useContext(AppContext);
    const [saveSearch, { loading, error }] = useMutation(SEARCH_SAVE);
    const searchSaved = appContext.searchSaved;
    const setSearchSaved = appContext.setSearchSaved;
    const [modalOpen, setModalOpen] = useState(false);
    const [rename, setRename] = useState("");

    let saveVariables = {
        // TODO: Implement userId value from context
        userId: "TimTest",
        searchTerm: appContext.search.term,
        endPoint: "http://localhost:5001",
        offSet: 0,
        recordLimit: 10,
        // TODO: Implement sort values from context (to be done when sort implemented properly)
        sort: {
            applied: "Alphabetical",
            value: "Up"
        }
    };

    if (appContext.filters && appContext.filters.length > 0) {
        saveVariables.filters = appContext.filters;
    }

    return (
        appContext.search.term !== null && (
            <>
                <Modal
                    id="save-search-modal"
                    open={modalOpen}
                    onRequestSubmit={() => {
                        rename && (saveVariables.name = rename);
                        saveSearch({ variables: saveVariables });
                        setSearchSaved(true);
                        setModalOpen(false);
                        setRename("");
                        return true;
                    }}
                    onSecondarySubmit={() => {
                        setModalOpen(false);
                        setRename("");
                    }}
                    onRequestClose={() => {
                        setModalOpen(false);
                        setRename("");
                    }}
                    modalLabel="Save search"
                    modalHeading={appContext.search.term}
                    primaryButtonText="Save"
                    secondaryButtonText="Cancel"
                    aria-label="Rename and save search."
                >
                    <TextInput
                        id="save-search-rename"
                        labelText="Rename"
                        light={true}
                        value={rename}
                        onChange={e => setRename(e.target.value)}
                    />
                </Modal>
                <SaveSearchButton
                    onClick={() => setModalOpen(true)}
                    kind="primary"
                    disabled={searchSaved}
                    status={searchSaved ? "finished" : "active"}
                    size="small"
                >
                    {searchSaved ? textItems.savedSearch : textItems.saveSearch}
                    {loading && <RightSmallInlineLoading />}
                </SaveSearchButton>
            </>
        )
    );
};

export default SaveSearch;
