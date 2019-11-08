import React, { useContext, useEffect } from "react";
import { AccordionBlock, AccordionElement } from "../../../styles/carbonComponents.js";
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
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement
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
            <p
                onClick={() => {
                    appContext.setFilterId(1);
                    appContext.toggleModal();
                }}
                open={modalVisibility}
            >
                {filterTitles.fourthFilter}
                {filterId === 1 && modalVisibility && <div id="filter-expanded" ref={appContext.itemRef} />}
            </p>
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
