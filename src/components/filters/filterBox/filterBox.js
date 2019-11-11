import React, { useContext } from "react";
import { StyledButton } from "../../../styles/carbonComponents.js";
import Filter from "../filter/filter.js";
import { ParagraphText, ButtonSet, FilterBoxContent, Triangle } from "../../../styles/styles.js";
import { AppContext } from "../../../HOC/AppContext/AppContext.js";

const FilterBox = () => {
    const appContext = useContext(AppContext);
    return (
        <React.Fragment>
            <Triangle />
            <FilterBoxContent>
                <ParagraphText>{appContext.filterHeadings[0]}</ParagraphText>
                <Filter />
            </FilterBoxContent>
            <ButtonSet>
                <StyledButton kind="secondary">Cancel</StyledButton>
                <StyledButton kind="primary">Apply</StyledButton>
            </ButtonSet>
        </React.Fragment>
    );
};

export default FilterBox;
