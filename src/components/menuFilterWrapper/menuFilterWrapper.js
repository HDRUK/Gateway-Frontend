import React, { useContext } from "react";
import { FilterDiv } from "../../styles/styles.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

// const MenuFilterWrapper = () => {
//     const appContext = useContext(AppContext);
//     const modalVisibility = appContext.state.modalVisibility;
//     return (
class MenuFilterWrapper extends React.Component {
    componentDidUpdate() {
        console.log("HI");
    }
    render() {
        return (
            <AppContext.Consumer>
                {appContext => (
                    <React.Fragment>
                        {!appContext.state.modalVisibility && <div />}

                        {appContext.state.modalVisibility && (
                            <FilterDiv
                                location={appContext.state.filterLocation}
                                modalVisibility={appContext.state.modalVisibility}
                            />
                        )}
                    </React.Fragment>
                )}
            </AppContext.Consumer>
        );
    }
}
MenuFilterWrapper.contextType = AppContext;
export default MenuFilterWrapper;
