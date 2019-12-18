import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { SearchBar } from "../../styles/carbonComponents";
import { LinkNoDecoration, WidthWrapper } from "../../styles/styles.js";
import { SearchHeaderWrapper, SearchBarWrapper, SearchHeaderImage } from "./styles";
import hdruk_black from "../../assets/hdruk_black.png";

const textItems = {
    search: "Search"
};

const SearchHeader = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const searchTerm = appContext.search.term;

    const onSearch = () => {
        console.log("SEARCH");
    };

    return (
        <SearchHeaderWrapper>
            <WidthWrapper>
                <SearchHeaderImage src={hdruk_black} />
                <SearchBarWrapper main={false}>
                    <SearchBar
                        defaultValue={searchTerm}
                        labelText={textItems.search}
                        light
                        onKeyPress={onSearch}
                        placeHolderText={`${textItems.search}...`}
                    />
                </SearchBarWrapper>
            </WidthWrapper>
        </SearchHeaderWrapper>
    );
};

export default SearchHeader;
