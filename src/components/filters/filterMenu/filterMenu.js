import React, { useContext, useEffect } from "react";
import {
    AccordionBlock,
    AccordionElement,
    DateSelector,
    DateInput,
    FilterButton
} from "../../../styles/carbonComponents.js";
import AppliedFilter from "../appliedFilter/appliedFilter.js";
import Filter from "../filter/filter.js";
import { FilterBlockTitle } from "../../../styles/styles.js";

import { AppContext } from "../../../HOC/AppContext/AppContext.js";

import { useQuery } from "@apollo/react-hooks";
import { GET_FILTER_VALUES } from "../../../queries/queries.js";

const FilterMenu = () => {
    const appContext = useContext(AppContext);
    const activeFilter = appContext.activeFilter;
    const modalVisibility = appContext.state.modalVisibility;
    useEffect(() => {
        modalVisibility && appContext.setFilterLocation();
    });

    const { loading, error, data } = useQuery(GET_FILTER_VALUES);

    useEffect(() => {
        if (data) {
            const filtersArray = data.hdrFilterValues.data.map(filter => ({
                name: filter.fieldName,
                values: filter.fieldValues
            }));

            console.log("dataObject", filtersArray);
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
                {filter.values ? (
                    filter.values.length > 4 ? (
                        activeFilter === i && modalVisibility && <div id="filter-expanded" ref={appContext.itemRef} />
                    ) : (
                        <div>
                            <AppliedFilter />
                            {filter.values.map((value, i) => (
                                <Filter key={`resultCard-${i}`} title={value} />
                            ))}

                            <FilterButton kind="primary">Apply</FilterButton>
                        </div>
                    )
                ) : (
                    <DateSelector datePickerType="range" dateFormat="d/m/Y">
                        <DateInput
                            id="date-picker-input-id-start"
                            labelText="From"
                            placeholder="dd/mm/yyyy"
                            invalidText="A valid value is required"
                        />
                        <DateInput
                            id="date-picker-input-id-end"
                            labelText="To"
                            placeholder="dd/mm/yyyy"
                            invalidText="A valid value is required"
                        />
                    </DateSelector>
                )}
            </AccordionElement>
        );
    };

    return (
        <AccordionBlock>
            <FilterBlockTitle>Filter</FilterBlockTitle>
            {loading && <div>Loading ...</div>}
            {error && <div>Error :(</div>}
            {appContext.filterObject && appContext.filterObject.map((filter, i) => filterElement(filter, i))}
        </AccordionBlock>
    );
};

export default FilterMenu;
