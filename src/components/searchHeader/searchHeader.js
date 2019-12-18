import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { SearchBar } from "../../styles/carbonComponents";
import { WidthWrapper } from "../../styles/styles.js";
import { SearchHeaderWrapper, SearchBarWrapper, SearchHeaderImage } from "./styles";
import gateway_logo_svg from "../../assets/gateway_main_rgb.svg";
import { Redirect } from "react-router-dom";

const textItems = {
    search: "Search"
};

const SearchHeader = props => {
    const appContext = useContext(AppContext);
    // const pageState = appContext.state.searchPageState;
    const searchTerm = appContext.search.term;
    const [redirect, setRedirect] = useState(false);

    const handleSearch = e => {
        const handledSearch = appContext.handleSearch(e);
        handledSearch && !redirect && setRedirect(true);
    };

    useEffect(() => {
        props.location.pathname === "/search" && setRedirect(false);
    }, [props.location.pathname, searchTerm]);

    const SearchRedirect = () => <Redirect to="/search" />;

    return (
        <SearchHeaderWrapper>
            <WidthWrapper>
                <SearchHeaderImage src={gateway_logo_svg} />
                <SearchBarWrapper main={false}>
                    {redirect && <SearchRedirect />}
                    <SearchBar
                        defaultValue={searchTerm}
                        labelText={textItems.search}
                        light
                        onKeyPress={e => handleSearch(e)}
                        placeHolderText={`${textItems.search}...`}
                    />
                </SearchBarWrapper>
            </WidthWrapper>
        </SearchHeaderWrapper>
    );
};

export default SearchHeader;
