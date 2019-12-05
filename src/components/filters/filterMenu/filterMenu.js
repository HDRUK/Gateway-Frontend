import React, { useContext, useEffect } from "react";
import {
    AccordionBlock,
    AccordionElement,
    DateSelector,
    DateInput,
    FilterButton
} from "../../../styles/carbonComponents.js";
// import AppliedFilter from "../appliedFilter/appliedFilter.js";
import Filter from "../filter/filter.js";
import { FilterBlockTitle } from "../../../styles/styles.js";

import { AppContext } from "../../../HOC/AppContext/AppContext.js";

import { useLazyQuery } from "@apollo/react-hooks";
import { GET_FILTER_VALUES } from "../../../queries/queries.js";

const FilterMenu = () => {
    const appContext = useContext(AppContext);
    const activeFilter = appContext.activeFilter;
    const modalVisibility = appContext.state.modalVisibility;
    const searchTerm = appContext.search.term;

    const [getFilterValues, { loading, error, data, refetch, called }] = useLazyQuery(GET_FILTER_VALUES, {
        notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
        modalVisibility && appContext.setFilterLocation();
    });

    useEffect(() => {
        if (searchTerm) {
            called ? refetch() : getFilterValues();
        }
    }, [searchTerm, called, refetch, getFilterValues]);

    useEffect(() => {
        if (data) {
            const filtersArray = data.hdrFilterValues.data.map(filter => ({
                name: filter.fieldName,
                values: filter.fieldValues
            }));
            appContext.setFilterObject(filtersArray);
        }
    }, [data]);

    const filterElement = (filter, i) => {
        const filterTitle = filter.name.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());

        return (
            <AccordionElement
                key={`filterItem-${i}`}
                title={filterTitle}
                open={filter.values && filter.values.length > 4 && !modalVisibility ? undefined : activeFilter === i}
                modal={filter.values && filter.values.length > 4 ? "true" : "false"}
                onHeadingClick={() => {
                    if (filter.values && filter.values.length > 4) {
                        if (!modalVisibility) {
                            appContext.openFilterBox();
                        } else if (activeFilter === i) {
                            appContext.closeFilterBox();
                        }
                    } else {
                        appContext.closeFilterBox();
                    }
                    appContext.setFilterId(i);
                }}
            >
                {filter.values &&
                    (filter.values.length > 4 ? (
                        activeFilter === i && modalVisibility && <div id="filter-expanded" ref={appContext.itemRef} />
                    ) : (
                        <div>
                            {/* TODO: Implement applied filters */}
                            {/* <AppliedFilter /> */}
                            {filter.values.map((value, i) => (
                                <Filter key={`resultCard-${i}`} title={value} />
                            ))}

                            <FilterButton kind="primary">Apply</FilterButton>
                        </div>
                    ))}
            </AccordionElement>
        );
    };

    return (
        <AccordionBlock>
            {loading ? (
                <div>Loading ...</div>
            ) : (
                appContext.filterObject &&
                appContext.filterObject.length > 0 && (
                    <React.Fragment>
                        <FilterBlockTitle>Filter</FilterBlockTitle>
                        {appContext.filterObject.map((filter, i) => filterElement(filter, i))}
                    </React.Fragment>
                )
            )}
            {error && <div>Error :(</div>}
        </AccordionBlock>
    );
};

export default FilterMenu;
