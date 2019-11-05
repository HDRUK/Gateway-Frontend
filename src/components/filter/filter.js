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
    return (
        <AccordionBlock>
            <FilterBlockTitle>Filter</FilterBlockTitle>
            <AccordionElement title={filterTitles.firstFilter} />
            <AccordionElement title={filterTitles.secondFilter} />
            <AccordionElement title={filterTitles.thirdFilter} />
            <AccordionElement
                open={appContext.state.modalVisibility}
                onClick={appContext.toggleModal}
                title={filterTitles.fourthFilter}
            >
                <FilterModal
                    modalVisibility={appContext.state.modalVisibility}
                    aria-label="fourthFilter"
                    id="fourthFilter"
                    modalHeading="fourthFilter"
                    onRequestClose={appContext.toggleModal}
                    onBlur={appContext.toggleModal}
                    secondaryButtonText="Cancel"
                    onSecondarySubmit={appContext.toggleModal}
                >
                    <p>Hello</p>
                </FilterModal>
            </AccordionElement>
        </AccordionBlock>
    );
};

export default Filter;
