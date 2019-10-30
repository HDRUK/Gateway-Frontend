import React from "react";
import { ParagraphHeading, CenterBlock, LargeSpace, SmallSpace } from "../../styles/styles.js";
import { SearchBar } from "../../styles/carbonComponents.js";

const Search = () => (
    <CenterBlock>
        <div>
            <LargeSpace />
            <ParagraphHeading>What health data do you need? </ParagraphHeading>
            <SmallSpace />
            <SearchBar labelText="Search" />
        </div>
    </CenterBlock>
);

export default Search;
