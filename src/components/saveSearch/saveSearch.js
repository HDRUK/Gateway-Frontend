import React, { useContext, useState } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { useMutation } from "@apollo/react-hooks";
import { SEARCH_SAVE } from "../../queries/queries.js";

import { Modal, TextInput } from "carbon-components-react";
import { SaveSearchButton } from "./styles.js";
import { NavErrorText } from "../../styles/styles.js";
import { RightSmallInlineLoading } from "../../styles/carbonComponents.js";

const textItems = {
    save: "Save",
    cancel: "Cancel",
    saveSearch: "Save search",
    savedSearch: "Search saved",
    savingSearch: "Seach saving...",
    savingFailed: "Unable to save search",
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
        searchAuditId: appContext.search.latestSearchAuditLogId,
        userId: appContext.userId
    };

    if (appContext.filters && appContext.filters.length > 0) {
        saveVariables.filters = appContext.filters;
    }

    const closeModal = () => {
        setModalOpen(false);
        setRename("");
        renameInvalid && setRenameInvalid(false);
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
                    disabled={searchSaved && !error ? true : false}
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
                {error && <NavErrorText>{textItems.savingFailed}</NavErrorText>}
            </>
        )
    );
};

export default SaveSearch;
