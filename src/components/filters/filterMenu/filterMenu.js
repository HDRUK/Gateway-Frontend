import React, { useContext, useEffect } from "react";
import {
    AccordionBlock,
    AccordionElement,
    CheckboxItem,
    DateSelector,
    DateInput
} from "../../../styles/carbonComponents.js";
import { FilterBlockTitle } from "../../../styles/styles.js";

import { AppContext } from "../../../HOC/AppContext/AppContext.js";

const filterTitles = {
    firstFilter: "Classifier",
    secondFilter: "Data Model Type",
    thirdFilter: "Last Updated",
    fourthFilter: "Date Created"
};

const FilterMenu = () => {
    const appContext = useContext(AppContext);
    const filterId = appContext.state.filterId;
    const modalVisibility = appContext.state.modalVisibility;
    useEffect(() => {
        modalVisibility && appContext.setFilterLocation();
    });

    return (
        <AccordionBlock>
            <div />
            <FilterBlockTitle>Filter</FilterBlockTitle>
            <AccordionElement title={filterTitles.firstFilter}>
                <CheckboxItem
                    onChange={(value, id) => (value ? appContext.addFilter(id) : appContext.removeFilter(id))}
                    id="label"
                    labelText="Label"
                ></CheckboxItem>
            </AccordionElement>
            <AccordionElement title={filterTitles.secondFilter}>
                <DateSelector datePickerType="range" dateFormat="m/d/Y">
                    <DateInput
                        id="date-picker-input-id-start"
                        labelText="From"
                        placeholder="mm/dd/yyyy"
                        invalidText="A valid value is required"
                    />
                    <DateInput
                        id="date-picker-input-id-end"
                        labelText="To"
                        placeholder="mm/dd/yyyy"
                        invalidText="A valid value is required"
                    />
                </DateSelector>
            </AccordionElement>
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement
                modal={true}
                onHeadingClick={() => {
                    appContext.setFilterId(0);
                    appContext.toggleModal();
                }}
                open={filterId === 0 && modalVisibility}
                title={filterTitles.fourthFilter}
            >
                {filterId === 0 && modalVisibility && <div id="filter-expanded" ref={appContext.itemRef} />}
            </AccordionElement>
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
        </AccordionBlock>
    );
};

export default FilterMenu;
