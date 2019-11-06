import React from "react";
import { AccordionBlock, AccordionElement } from "../../styles/carbonComponents.js";
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
        appContext.state.itemRef.current &&
            appContext.state.filterLocation !== appContext.state.itemRef.current.getBoundingClientRect().y &&
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
                            onHeadingClick={appContext.toggleModal}
                            open={appContext.state.modalVisibility}
                            title={filterTitles.fourthFilter}
                        >
                            {appContext.state.modalVisibility && <div ref={appContext.state.itemRef} />}
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
                )}
            </AppContext.Consumer>
        );
    }
}
Filter.contextType = AppContext;
export default Filter;
