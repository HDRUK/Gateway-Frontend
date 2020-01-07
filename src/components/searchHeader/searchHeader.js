import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { SearchBar } from "../../styles/carbonComponents";
import { WidthWrapper, LinkNoDecoration } from "../../styles/styles.js";
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
    const [localSearchTerm, setLocalSearchTerm] = useState("");

    const handleSearch = e => {
        appContext.handleSearch(e);
        if (!redirect && e && e.key === "Enter" && props.location.pathname !== "/search") {
            setRedirect(true);
        }
    };

    useEffect(() => {
        props.location.pathname === "/search" && setRedirect(false);
    }, [props.location.pathname, searchTerm]);

    useEffect(() => {
        searchTerm ? setLocalSearchTerm(searchTerm) : setLocalSearchTerm("");
    }, [searchTerm]);

    const SearchRedirect = () => <Redirect to="/search" />;

    return (
        <SearchHeaderWrapper>
            <WidthWrapper>
                <LinkNoDecoration to="/">
                    <SearchHeaderImage src={gateway_logo_svg} />
                </LinkNoDecoration>
                <SearchBarWrapper main={false}>
                    {redirect && <SearchRedirect />}
                    <SearchBar
                        value={localSearchTerm}
                        labelText={textItems.search}
                        light
                        onChange={e => setLocalSearchTerm(e.target.value)}
                        onKeyPress={e => handleSearch(e)}
                        placeHolderText={`${textItems.search}...`}
                    />
                </SearchBarWrapper>
            </WidthWrapper>
        </SearchHeaderWrapper>
    );
};

export default SearchHeader;
