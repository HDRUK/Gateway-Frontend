import React from "react";
import { AccordionBlock, AccordionElement } from "../../styles/carbonComponents.js";
import { FilterBlockTitle } from "../../styles/styles.js";

const Filter = () => (
    <AccordionBlock>
        <FilterBlockTitle>Filter</FilterBlockTitle>
        <AccordionElement />
        <AccordionElement />
        <AccordionElement />
        <AccordionElement />
    </AccordionBlock>
);

export default Filter;
