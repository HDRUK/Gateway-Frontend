import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { useMutation } from "@apollo/react-hooks";
import { SEARCH_SAVE } from "../../queries/queries.js";

// import { InlineLoading } from "carbon-components-react";
import { SaveSearchButton, RightSmallInlineLoading } from "./styles.js";

const textItems = {
    saveSearch: "Save search"
};

const SaveSearch = () => {
    const appContext = useContext(AppContext);
    const [saveSearch, { loading }] = useMutation(SEARCH_SAVE);

    return (
        <SaveSearchButton
            onClick={() =>
                saveSearch({
                    variables: {
                        userId: "TimTest",
                        searchTerm: appContext.search.term,
                        endPoint: "http://localhost:5001",
                        offSet: 0,
                        recordLimit: 10,
                        sort: {
                            applied: "Alphabetical",
                            value: "Up"
                        },
                        filters: [
                            {
                                type: "Geography",
                                value: "Scotland"
                            },
                            {
                                type: "Geography",
                                value: "England"
                            }
                        ]
                    }
                })
            }
        >
            {textItems.saveSearch}
            {loading && <RightSmallInlineLoading />}
        </SaveSearchButton>
    );
};

export default SaveSearch;
