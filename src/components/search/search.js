import React, { useContext } from "react";
import { ParagraphHeading, CenterBlock, LargeSpace, SmallSpace } from "../../styles/styles.js";
import { SearchBar } from "../../styles/carbonComponents.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import PropTypes from "prop-types";

const Search = props => {
    const appContext = useContext(AppContext);
    const searchHeader = appContext.textItems[props.identifier];
    const returnSearchResults = appContext.returnSearchResults;
    return (
        <CenterBlock>
            <LargeSpace />
            <ParagraphHeading>{searchHeader}</ParagraphHeading>
            <SmallSpace />
            <SearchBar labelText="Search" onKeyPress={returnSearchResults} />
        </CenterBlock>
    );
};

Search.propTypes = {
    identifier: PropTypes.node
};

export default Search;
