import React from "react";
import { SearchBar, ParagraphHeading, CenterBlock, LargeSpace, SmallSpace } from "../../styles/styles.js";

const Search = () => (
    <CenterBlock>
        <div>
            <LargeSpace></LargeSpace>
            <ParagraphHeading>What health data do you need? </ParagraphHeading>
            <SmallSpace></SmallSpace>
            <SearchBar></SearchBar>
        </div>
    </CenterBlock>
);

export default Search;
