import React, { useState } from "react";
import PropTypes from "prop-types";
import hdruk_logo_black from "../../assets/hdruk_black.png";

// import { useQuery, useLazyQuery } from "@apollo/react-hooks";
// import { CATALOGUE_ITEMS_SEARCH } from "../../queries/queries.js";

export const AppContext = React.createContext();
export const AppContextConsumer = AppContext.Consumer;

const AppContextProvider = props => {
    const [state, setState] = useState({
        counter: 0,
        searchPageState: false
    });

    const newsItems = {
        newsItemOne: {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        },
        newsItemTwo: {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        },
        newsItemThree: {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        }
    };

    const images = {
        logoHDR: hdruk_logo_black
    };

    const textItems = { searchHeader: "What health data do you need?" };

    const [search, setSearch] = useState({
        term: "",
        data: []
    });

    // const search = {
    //     loading: false,
    //     data: [
    //         {
    //             title: "Card 1",
    //             description:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis imperdiet, cursus odio id, auctor tortor. Cras condimentum fermentum elit, ut feugiat justo mattis eget. Curabitur imperdiet neque nibh, eu rutrum nisl pellentesque in. Aliquam rhoncus augue ac dapibus finibus. Integer at pulvinar ligula, hendrerit semper nulla. Donec magna felis, tempus vel ultrices vitae, pellentesque ac nulla. Fusce malesuada sagittis pellentesque. In condimentum lacinia volutpat. Etiam scelerisque lobortis sapien, in varius nisl dictum ut. Fusce quis varius leo. Maecenas sed arcu nec risus eleifend posuere ac a elit. Nullam bibendum ligula eu sem facilisis, volutpat feugiat sapien commodo. Suspendisse imperdiet convallis elit sed egestas. Suspendisse vitae tellus luctus, tincidunt tellus vitae, ultricies est. Aenean rutrum condimentum leo, in malesuada orci iaculis eu. "
    //         },
    //         {
    //             title:
    //                 "Card 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis sit amet tellus et vulputate. Praesent ligula enim, facilisis vel nisi non, condimentum convallis justo. Sed semper sodales mi hendrerit blandit. Sed posuere tellus quis est consequat, id pretium justo egestas. Sed in augue purus. Donec sed viverra mi. Nulla vitae libero malesuada, tincidunt nibh vitae, venenatis urna.",
    //             description:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis sit amet tellus et vulputate. Praesent ligula enim, facilisis vel nisi non, condimentum convallis justo. Sed semper sodales mi hendrerit blandit. Sed posuere tellus quis est consequat, id pretium justo egestas. Sed in augue purus. Donec sed viverra mi. Nulla vitae libero malesuada, tincidunt nibh vitae, venenatis urna."
    //         },
    //         {
    //             title: "Card 3",
    //             description:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis sit amet tellus et vulputate. Praesent ligula enim, facilisis vel nisi non, condimentum convallis justo. Sed semper sodales mi hendrerit blandit. Sed posuere tellus quis est consequat, id pretium justo egestas. Sed in augue purus. Donec sed viverra mi. Nulla vitae libero malesuada, tincidunt nibh vitae, venenatis urna."
    //         },
    //         {
    //             title: "Card 4",
    //             description: "Lorem ipsum"
    //         }
    //     ]
    // };

    const updateSearchData = data => {
        setSearch({
            data: data
        });
    };

    const returnSearchResults = event => {
        if (event.key === "Enter") {
            setState({
                searchPageState: true
            });
            setSearch({
                term: event.target.value
            });
        }
    };

    const counterFunc = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                counterFunc,
                newsItems,
                images,
                textItems,
                returnSearchResults,
                search,
                updateSearchData
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node
};

export default AppContextProvider;
