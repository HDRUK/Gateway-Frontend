import React, { useContext, useState } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { useMutation } from "@apollo/react-hooks";
import { SEARCH_SAVE } from "../../queries/queries.js";

import { Modal, TextInput } from "carbon-components-react";
import { SaveSearchButton, RightSmallInlineLoading } from "./styles.js";

const textItems = {
    save: "Save",
    cancel: "Cancel",
    saveSearch: "Save search",
    savedSearch: "Search saved",
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
    const [saveSearch, { loading, error }] = useMutation(SEARCH_SAVE);
    const searchSaved = appContext.searchSaved;
    const searchTerm = appContext.search.term;
    const setSearchSaved = appContext.setSearchSaved;
    const [modalOpen, setModalOpen] = useState(false);
    const [rename, setRename] = useState("");
    const [renameInvalid, setRenameInvalid] = useState(false);

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

    const closeModal = () => {
        setModalOpen(false);
        setRename("");
    };

    return (
        searchTerm !== null && (
            <>
                <Modal
                    id="save-search-modal"
                    open={modalOpen}
                    onRequestSubmit={() => {
                        rename && (saveVariables.name = rename);
                        saveSearch({ variables: saveVariables });
                        setSearchSaved(true);
                        closeModal();
                        return true;
                    }}
                    onSecondarySubmit={closeModal}
                    onRequestClose={closeModal}
                    modalLabel={textItems.saveSearch}
                    modalHeading={searchTerm}
                    primaryButtonText={textItems.save}
                    secondaryButtonText={textItems.cancel}
                    primaryButtonDisabled={!(searchTerm || rename) || renameInvalid}
                    aria-label={textItems.aria.renameAndSaveSearch}
                >
                    <TextInput
                        id="save-search-rename"
                        labelText={textItems.rename}
                        value={rename}
                        placeholder={searchTerm || textItems.enterTextHere}
                        onChange={e => {
                            setRename(e.target.value);
                            if (e.target.value.length < 100) {
                                renameInvalid && setRenameInvalid(false);
                            } else {
                                setRenameInvalid(true);
                            }
                        }}
                        invalid={renameInvalid}
                        invalidText={textItems.error.tooLong}
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
