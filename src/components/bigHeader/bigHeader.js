import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { MediumSpace } from "../../styles/styles.js";
import { BigHeaderWrapper, BigHeaderWidthWrapper, BigHeaderImage } from "./styles.js";
import Login from "../../components/login/login";
import gateway_logo_svg from "../../assets/gateway_main_white.svg";

const BigHeader = () => {
    const appContext = useContext(AppContext);
    const useDatasetCount = appContext.useDatasetCount;

    useDatasetCount();

    return (
        <BigHeaderWrapper aria-label="HDR UK Innovation Gateway">
            <BigHeaderWidthWrapper>
                <BigHeaderImage src={gateway_logo_svg} />
                <MediumSpace />
                <Login />
            </BigHeaderWidthWrapper>
        </BigHeaderWrapper>
    );
};

export default BigHeader;
