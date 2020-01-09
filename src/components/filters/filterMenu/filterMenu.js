import React, { useContext, useEffect, useCallback } from "react";
import { AccordionElement, FilterButton, CenterLoading, CustomTag } from "../../../styles/carbonComponents.js";
import Filter from "../filter/filter.js";
import { FilterBlockTitle } from "../../../styles/styles.js";
import { ExpandingAccordionBlock, FilterWrapper } from "./styles";

import { AppContext } from "../../../HOC/AppContext/AppContext.js";

import { useLazyQuery } from "@apollo/react-hooks";
import { GET_FILTER_VALUES } from "../../../queries/queries.js";

export const filterChangesCheck = (filterKey, filterObject) => {
    const values = filterObject[filterKey];
    const changes = Object.keys(values).map(valueIndex => {
        const value = values[valueIndex];
        return value.checked !== value.applied ? true : false;
    });
    return changes.find(change => (change ? true : false));
};

const FilterMenu = () => {
    const appContext = useContext(AppContext);
    const activeFilter = appContext.activeFilter;
    const modalVisibility = appContext.state.modalVisibility;
    const searchTerm = appContext.search.term;
    const filterObject = appContext.filterObject;
    const setFilterObject = appContext.setFilterObject;
    const setFilterString = appContext.setFilterString;
    const setFilterLocation = useCallback(() => appContext.setFilterLocation(appContext.itemRef), [appContext]);

    const filterDivRef = appContext.filterDivRef.current;
    const filterDivBox = filterDivRef && filterDivRef.parentNode.getBoundingClientRect();
    const filterBoxHeight = filterDivBox ? filterDivBox.height : 0;

    const [getFilterValues, { loading, error, data, refetch, called }] = useLazyQuery(GET_FILTER_VALUES, {
        notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
        modalVisibility && appContext.setFilterLocation();
    });

    useEffect(() => {
        if (searchTerm !== null) {
            called ? refetch() : getFilterValues();
        }
    }, [searchTerm, called, refetch, getFilterValues]);

    useEffect(() => {
        if (data) {
            let newFilterObject = {};
            // TODO: Should this code be moved to appContext returnSearchResults filter processing
            data.hdrFilterValues.data.forEach(filter => {
                newFilterObject[filter.fieldName] = {};
                filter.fieldValues.forEach((value, i) => {
                    const appliedFilter =
                        filterObject[filter.fieldName] &&
                        Object.values(filterObject[filter.fieldName]).find(filterValue => filterValue.value === value);
                    newFilterObject[filter.fieldName][i] = {
                        value,
                        checked: (appliedFilter && appliedFilter.checked) || false,
                        applied: (appliedFilter && appliedFilter.applied) || false
                    };
                });
            });

            setFilterObject(newFilterObject);
        }
        // We don't want this effect to run everytime filterObject is updated, therefore not including in dependencies.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, setFilterObject]);

    useEffect(() => {
        let finalFilterString = "";
        let filterApplied = false;
        Object.keys(filterObject).forEach(filterKey => {
            let filterString = "";
            const valueState = filterObject[filterKey];
            Object.keys(valueState).forEach(valueKey => {
                if (valueState[valueKey].applied) {
                    filterString += `${filterApplied ? "&" : "?"}${filterKey}=${valueState[valueKey].value}`;
                    filterApplied = true;
                }
            });
            finalFilterString += filterString;
        });
        setFilterString(finalFilterString);
    }, [filterObject, setFilterString]);

    useEffect(() => {
        if (modalVisibility) {
            document.getElementById("main-side-nav").childNodes[1].addEventListener("scroll", setFilterLocation);
        }
        return () =>
            document.getElementById("main-side-nav").childNodes[1].removeEventListener("scroll", setFilterLocation);
    }, [modalVisibility, setFilterLocation]);

    const filterElement = (filterKey, filterValues, i) => {
        const filterTitle = filterKey.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());

        return (
            <AccordionElement
                key={`filterItem-${i}`}
                title={
                    <div>
                        {filterValues &&
                            Object.keys(filterValues).length > 4 &&
                            (activeFilter === i && modalVisibility && (
                                <div id="filter-expanded" ref={appContext.itemRef} />
                            ))}
                        <p>{filterTitle}</p>
                        {Object.keys(filterValues).map(
                            valueI =>
                                filterValues[valueI].applied && (
                                    <CustomTag
                                        key={`tag-${valueI}`}
                                        type="blue"
                                        filter
                                        onClick={() =>
                                            appContext.removeFilter({ filter: filterKey, valueIndex: valueI })
                                        }
                                    >
                                        {filterValues[valueI].value}
                                    </CustomTag>
                                )
                        )}
                    </div>
                }
                open={
                    filterValues && Object.keys(filterValues).length > 4 && !modalVisibility
                        ? undefined
                        : activeFilter === i
                }
                modal={filterValues && Object.keys(filterValues).length > 4 ? "true" : "false"}
                onHeadingClick={() => {
                    if (filterValues && Object.keys(filterValues).length > 4) {
                        if (!modalVisibility) {
                            appContext.openFilterBox();
                        } else if (activeFilter === i) {
                            appContext.closeFilterBox();
                        }
                    } else {
                        appContext.closeFilterBox();
                    }
                    appContext.setFilterId(i);
                }}
            >
                {filterValues &&
                    (Object.keys(filterValues).length <= 4 && (
                        <FilterWrapper>
                            {Object.keys(filterValues).map((valueIndex, i) => (
                                <Filter
                                    key={`resultCard-${i}`}
                                    title={filterValues[valueIndex].value}
                                    checked={filterValues[valueIndex].checked}
                                    onChange={() => appContext.checkFilters(filterKey, valueIndex)}
                                />
                            ))}

                            <FilterButton
                                kind="primary"
                                onClick={() => appContext.applyFilter(filterKey)}
                                disabled={!filterChangesCheck(filterKey, filterObject)}
                            >
                                Apply
                            </FilterButton>
                        </FilterWrapper>
                    ))}
            </AccordionElement>
        );
    };

    return (
        <React.Fragment>
            {loading ? (
                <CenterLoading withOverlay={false} />
            ) : (
                <ExpandingAccordionBlock expandheight={modalVisibility ? filterBoxHeight : undefined}>
                    {filterObject && Object.keys(filterObject).length > 0 && (
                        <React.Fragment>
                            <FilterBlockTitle>Filters</FilterBlockTitle>
                            {Object.keys(filterObject).map((filterKey, i) =>
                                filterElement(filterKey, filterObject[filterKey], i)
                            )}
                        </React.Fragment>
                    )}
                    {error && <div>Failed to load filters</div>}
                </ExpandingAccordionBlock>
            )}
        </React.Fragment>
    );
};

export default FilterMenu;
