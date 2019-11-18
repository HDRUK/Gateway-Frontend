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

const FilterMenu = () => {
    const appContext = useContext(AppContext);
    const filterId = appContext.activeFilter;
    const modalVisibility = appContext.state.modalVisibility;
    useEffect(() => {
        modalVisibility && appContext.setFilterLocation();
    });

    return (
        <AccordionBlock>
            <FilterBlockTitle>Filter</FilterBlockTitle>
            {appContext.filterObject.map((filter, i) => (
                <AccordionElement
                    key={`filterItem-${i}`}
                    title={filter.title}
                    open={
                        filter.values && filter.values.length > 4 && !modalVisibility
                            ? undefined
                            : filterId === filter.id
                    }
                    modal={filter.values && filter.values.length > 4 ? "true" : "false"}
                    onHeadingClick={() => {
                        if (filter.values && filter.values.length > 4) {
                            if (!modalVisibility) {
                                appContext.openFilterBox();
                            } else if (filterId === filter.id) {
                                appContext.closeFilterBox();
                            }
                        } else {
                            appContext.closeFilterBox();
                        }
                        appContext.setFilterId(filter.id);
                    }}
                >
                    {filter.values ? (
                        filter.values.length > 4 ? (
                            filterId === filter.id &&
                            modalVisibility && <div id="filter-expanded" ref={appContext.itemRef} />
                        ) : (
                            <div>
                                <AppliedFilter />
                                {filter.values.map((filter, i) => (
                                    <Filter key={`resultCard-${i}`} title={filter.title} />
                                ))}

                                <FilterButton kind="primary">Apply</FilterButton>
                            </div>
                        )
                    ) : (
                        <DateSelector datePickerType="range" dateFormat="m/d/Y">
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
            ))}
        </AccordionBlock>
    );
};

export default FilterMenu;
