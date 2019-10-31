import React, { useContext } from "react";
import { ParagraphHeading, CenterBlock, LargeSpace, SmallSpace } from "../../styles/styles.js";
import { SearchBar } from "../../styles/carbonComponents.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const Search = identifier => {
    const appContext = useContext(AppContext);
    const text = appContext.textItems[identifier.value];
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

export default Search;
