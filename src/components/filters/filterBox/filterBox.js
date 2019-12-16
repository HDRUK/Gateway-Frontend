import React, { useContext } from "react";
import { StyledButton } from "../../../styles/carbonComponents.js";
import Filter from "../filter/filter.js";
import { ParagraphText, ButtonSet, FilterBoxContent, Triangle, FilterBlock } from "../../../styles/styles.js";
import { AppContext } from "../../../HOC/AppContext/AppContext.js";
import { filterChangesCheck } from "../filterMenu/filterMenu";

const textItems = {
    apply: "Apply",
    cancel: "Cancel"
};

const FilterBox = () => {
    const appContext = useContext(AppContext);
    const filterKey = Object.keys(appContext.filterObject).find((key, i) => i === appContext.activeFilter);
    const values = appContext.filterObject[filterKey];
    const filterTitle = filterKey.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());

    return (
        <React.Fragment>
            <Triangle />
            <FilterBoxContent>
                <ParagraphText>{filterTitle}</ParagraphText>
                <FilterBlock>
                    {Object.keys(values).map((valueIndex, i) => (
                        <Filter
                            key={`resultCard-${i}`}
                            title={values[valueIndex].value}
                            defaultChecked={values[valueIndex].checked}
                            onChange={() => appContext.checkFilters(filterKey, valueIndex)}
                        />
                    ))}
                </FilterBlock>
            </FilterBoxContent>
            <ButtonSet>
                <StyledButton kind="secondary" onClick={appContext.closeFilterBox}>
                    {textItems.cancel}
                </StyledButton>
                <StyledButton
                    kind="primary"
                    onClick={() => {
                        appContext.applyFilter(filterKey);
                        appContext.closeFilterBox();
                    }}
                    disabled={!filterChangesCheck(filterKey, appContext.filterObject)}
                >
                    {textItems.apply}
                </StyledButton>
            </ButtonSet>
        </React.Fragment>
    );
};

export default FilterBox;
