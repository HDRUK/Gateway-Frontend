import React, { useContext } from "react";
import { AccordionBlock, AccordionElement, FilterModal } from "../../styles/carbonComponents.js";
import { FilterBlockTitle } from "../../styles/styles.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

const filterTitles = {
    firstFilter: "Classifier",
    secondFilter: "Data Model Type",
    thirdFilter: "Last Updated",
    fourthFilter: "Date Created"
};

// let modalVisibility = true;

// const toggleModal = () => {
//     modalVisibility = !modalVisibility;
//     console.log(modalVisibility);
// };

const Filter = () => {
    const appContext = useContext(AppContext);
    let itemRef = appContext.state.itemRef;
    return (
        <AccordionBlock>
            <FilterBlockTitle>Filter</FilterBlockTitle>
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement
                onHeadingClick={appContext.toggleModal}
                open={appContext.state.modalVisibility}
                title={filterTitles.fourthFilter}
            >
                {appContext.state.modalVisibility && <div ref={itemRef} />}
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

export default Filter;
