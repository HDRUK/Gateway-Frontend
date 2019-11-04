import React, { useContext } from "react";
import { ParagraphHeading, CenterBlock, LargeSpace, SmallSpace } from "../../styles/styles.js";
import { SearchBar } from "../../styles/carbonComponents.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import PropTypes from "prop-types";

const Search = props => {
    const appContext = useContext(AppContext);
    const text = appContext.textItems[props.identifier];
    return (
        <CenterBlock>
            <div>
                <LargeSpace />
                <ParagraphHeading>{text}</ParagraphHeading>
                <SmallSpace />
                <SearchBar labelText="Search" />
            </div>
        </CenterBlock>
    );
};

Search.propTypes = {
    identifier: PropTypes.node
};

export default Search;
