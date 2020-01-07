import React, { useContext, useEffect } from "react";
import { StyledButton } from "../../../styles/carbonComponents.js";
import Filter from "../filter/filter.js";
import { ParagraphText, ButtonSet, FilterBoxContent, Triangle, FilterBlock } from "../../../styles/styles.js";
import { AppContext } from "../../../HOC/AppContext/AppContext.js";
import { filterChangesCheck } from "../filterMenu/filterMenu";

const textItems = {
    apply: "Apply",
    cancel: "Cancel"
};

const useOutsideAlerter = (ref, context) => {
    function handleClickOutside(event) {
        if (
            context.state.modalVisibility &&
            ref.current.parentNode &&
            !ref.current.parentNode.contains(event.target) &&
            !context.itemRef.current.parentNode.parentNode.parentNode.parentNode.contains(event.target)
        ) {
            context.closeFilterBox();
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
};

const FilterBox = () => {
    const appContext = useContext(AppContext);
    const filterKey = Object.keys(appContext.filterObject).find((key, i) => i === appContext.activeFilter);
    const values = appContext.filterObject[filterKey];
    const filterTitle = filterKey.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());

    useOutsideAlerter(appContext.filterDivRef, appContext);

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
                            checked={values[valueIndex].checked}
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
