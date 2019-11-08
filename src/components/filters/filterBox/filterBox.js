import React, { useContext } from "react";
import { StyledButton, CheckboxItem } from "../../../styles/carbonComponents.js";
import { ParagraphText, ButtonSet, FilterBoxContent } from "../../../styles/styles.js";
import { AppContext } from "../../../HOC/AppContext/AppContext.js";

const FilterBox = () => {
    const appContext = useContext(AppContext);

    return (
        <React.Fragment>
            <FilterBoxContent>
                <ParagraphText>Date Created</ParagraphText>
                <CheckboxItem
                    onChange={(value, id) => value && appContext.addFilter(id)}
                    id="label"
                    labelText="Label"
                ></CheckboxItem>
            </FilterBoxContent>
            <ButtonSet>
                <StyledButton kind="secondary">Cancel</StyledButton>
                <StyledButton kind="primary">Apply</StyledButton>
            </ButtonSet>
        </React.Fragment>
    );
};

export default FilterBox;
