import React, { useContext } from "react";
import { StyledButton } from "../../../styles/carbonComponents.js";
import Filter from "../filter/filter.js";
import { ParagraphText, ButtonSet, FilterBoxContent, Triangle, FilterBlock } from "../../../styles/styles.js";
import { AppContext } from "../../../HOC/AppContext/AppContext.js";

const FilterBox = () => {
    const appContext = useContext(AppContext);
    const filters = appContext.filterObject.find(element => {
        return element.id === appContext.state.filterId;
    });
    console.log(filters);
    return (
        <React.Fragment>
            <Triangle />
            <FilterBoxContent>
                <ParagraphText>{filters.title}</ParagraphText>
                <FilterBlock>
                    {filters.values.map((filter, i) => (
                        <Filter key={`resultCard-${i}`} title={filter.title} />
                    ))}
                </FilterBlock>
            </FilterBoxContent>
            <ButtonSet>
                <StyledButton kind="secondary">Cancel</StyledButton>
                <StyledButton kind="primary">Apply</StyledButton>
            </ButtonSet>
        </React.Fragment>
    );
};

export default FilterBox;
