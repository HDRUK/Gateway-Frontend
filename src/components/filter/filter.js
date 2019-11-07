import React from "react";
import { AccordionBlock, AccordionElement, DropdownFilter } from "../../styles/carbonComponents.js";
import { FilterBlockTitle } from "../../styles/styles.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

const filterTitles = {
    firstFilter: "Classifier",
    secondFilter: "Data Model Type",
    thirdFilter: "Last Updated",
    fourthFilter: "Date Created"
};

// const Filter = () => {
//     const appContext = useContext(AppContext);
//     let itemRef = appContext.state.itemRef;
//     return (
class Filter extends React.Component {
    componentDidUpdate() {
        let appContext = this.context;
        appContext.itemRef.current &&
            appContext.state.filterLocation !== appContext.itemRef.current.getBoundingClientRect().y &&
            appContext.setFilterLocation();
        console.log(appContext.state.filterLocation);
    }
    render() {
        return (
            <AppContext.Consumer>
                {appContext => (
                    <AccordionBlock>
                        <FilterBlockTitle>Filter</FilterBlockTitle>
                        <AccordionElement title={filterTitles.firstFilter} />
                        <AccordionElement title={filterTitles.secondFilter} />
                        <AccordionElement title={filterTitles.thirdFilter} />
                        <AccordionElement
                            onHeadingClick={() => {
                                appContext.setFilterId(0);
                                appContext.toggleModal();
                            }}
                            open={appContext.state.filterId === 0 && appContext.state.modalVisibility}
                            title={filterTitles.fourthFilter}
                        >
                            {appContext.state.filterId === 0 && appContext.state.modalVisibility && (
                                <div ref={appContext.itemRef} />
                            )}
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
                            open={appContext.state.modalVisibility}
                        >
                            {filterTitles.fourthFilter}
                            {appContext.state.filterId === 1 && appContext.state.modalVisibility && (
                                <div ref={appContext.itemRef} />
                            )}
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
                )}
            </AppContext.Consumer>
        );
    }
}
Filter.contextType = AppContext;
export default Filter;
