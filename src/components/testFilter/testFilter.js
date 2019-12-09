// This is example code that should be deleted before merge to develop!

// import React, { useEffect, useContext } from "react";
// import { AppContext } from "../../HOC/AppContext/AppContext.js";

// import { CheckboxItem } from "../../styles/carbonComponents.js";
// import styled from "styled-components";

// const FilterDiv = styled.div`
//     border: 0.125rem solid black;
//     background-color: lightgray;
// `;

// const TestFilter = props => {
//     const filterValues = props.filterObject;
//     return (
//         <FilterDiv>
//             <p>{props.filterKey}</p>
//             {Object.keys(filterValues).map(valueIndex => {
//                 const value = filterValues[valueIndex];
//                 return (
//                     <CheckboxItem
//                         key={`${props.filterKey}-${value.value}`}
//                         id={`${props.filterKey}-${value.value}`}
//                         labelText={value.value}
//                         onChange={() => props.handleChange(props.filterKey, valueIndex)}
//                     />
//                 );
//             })}
//             <button onClick={() => props.handleSubmit(props.filterKey)}>Apply</button>
//         </FilterDiv>
//     );
// };

// const MainFilter = props => {
//     const appContext = useContext(AppContext);
//     const newFilterObject = appContext.newFilterObject;
//     const setNewFilterObject = appContext.setNewFilterObject;

//     useEffect(() => {
//         let finalFilterString = "";
//         let filterApplied = false;
//         Object.keys(newFilterObject).forEach(filterKey => {
//             let filterString = "";
//             const valueState = newFilterObject[filterKey];
//             Object.keys(valueState).forEach(valueKey => {
//                 if (valueState[valueKey].applied) {
//                     filterString += `${filterApplied ? "&" : "?"}${filterKey}=${valueState[valueKey].value}`;
//                     filterApplied = true;
//                 }
//             });
//             finalFilterString += filterString;
//         });
//         console.log("appliedFilters:", finalFilterString);
//     }, [appContext, newFilterObject, setNewFilterObject]);

//     const handleChange = (filter, valueIndex) => {
//         const filterValue = newFilterObject[filter][valueIndex];

//         setNewFilterObject({
//             ...newFilterObject,
//             [filter]: {
//                 ...newFilterObject[filter],
//                 [valueIndex]: {
//                     ...filterValue,
//                     checked: !filterValue.checked
//                 }
//             }
//         });
//     };

//     const handleSubmit = filter => {
//         let filterValues = Object.keys(newFilterObject[filter]).map(valueIndex => ({
//             ...newFilterObject[filter][valueIndex],
//             applied: newFilterObject[filter][valueIndex].checked
//         }));

//         setNewFilterObject({
//             ...newFilterObject,
//             [filter]: {
//                 ...filterValues
//             }
//         });
//     };

//     return (
//         <div>
//             {Object.keys(newFilterObject).map((filterKey, i) => (
//                 <TestFilter
//                     key={`testFilter-${i}`}
//                     filterKey={filterKey}
//                     filterObject={newFilterObject[filterKey]}
//                     handleChange={handleChange}
//                     handleSubmit={handleSubmit}
//                 />
//             ))}
//         </div>
//     );
// };

// export default MainFilter;
