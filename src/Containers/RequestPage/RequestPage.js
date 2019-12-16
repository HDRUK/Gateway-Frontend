import React, { useState, useContext } from "react";
import { LightText, StyledSmallBoldText, SmallSpace, TinySpace, RedText, StyledHeading } from "../../styles/styles";
import {
    StyledForm,
    StyledTextInput,
    NewStyledButton,
    CheckboxItem,
    StyledFormLabel,
    StyledTextArea,
    CenterLoading,
    RightSmallInlineLoading
} from "../../styles/carbonComponents";
import axios from "axios";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

const textItems = {
    heading: "Request access for",
    aimHeader: "Research Aim",
    aimHelpText: "Please briefly explain the purpose of your research and why you require this dataset.",
    datasetHeader: "Linked Datasets",
    datasetHelpText: "Please identify the names of any datasets you would like to link with this one.",
    datasetCheckbox: "I don't want to link any datasets.",
    requirementsHeader: "Data Requirements",
    requirementsHelpText: "Please explain which parts of the dataset you are interested in.",
    requirementsCheckbox: "I don't know.",
    startDate: "Propsed Project Start Date",
    ico: "ICO Registration",
    benefitsHeader: "Research Benefits",
    benefitsHelpText: "Please provide evidence of how your research will benefit the health and social care system.",
    evidenceHeader: "Ethical Processing Evidence",
    evidenceHelpText:
        "Please provide a link(s) to relevant sources that showcase evidence of the fair processing of data by your organisation.",
    contact: "Contact Number",
    button: "Send Enquiry"
};

const RequestPage = props => {
    const appContext = useContext(AppContext);
    const [datasetRequired, setDatasetRequired] = useState(true);
    const [aimInvalid, setAimInvalid] = useState(false);
    const [datasetInvalid, setDatasetInvalid] = useState(false);
    const [requirementsInvalid, setRequirementsInvalid] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const [requestLoading, setRequestLoading] = useState(false);

    const [formInput, setFormInput] = useState({});
    const [requirementsRequired, setRequirementsRequired] = useState(true);

    appContext.useDetailData(props.match.params.id);

    const detailData = appContext.detailData.data;
    if (appContext.detailData.status === "loading") {
        return <CenterLoading />;
    } else if (appContext.detailData.status === "error") {
        return <div>Unable to load</div>;
    }

    const resetForm = () => {
        setFormInput({});
    };

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to={`/detail/${detailData.id}`} />;
        }
    };

    const handleSubmit = () => {
        setRequestLoading(true);
        // const messageHtml = renderEmail(<MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>);

        axios({
            method: "POST",
            url: "/send",
            data: {
                sender: appContext.userEmail,
                // recipient: detailData.contactPoint,
                recipient: "",
                title: detailData.title,
                messageHtml: JSON.stringify(formInput)
            }
        }).then(response => {
            if (response.data.msg === "success") {
                setRedirect(true);
                resetForm();
            } else if (response.data.msg === "fail") {
                alert("Oops, something went wrong. Try again");
            }
        });
    };

    return (
        <SmallSpace>
            <StyledSmallBoldText>
                <LightText>{textItems.heading.toUpperCase()}</LightText>
            </StyledSmallBoldText>
            <StyledHeading>{detailData.title}</StyledHeading>
            <SmallSpace></SmallSpace>
            {renderRedirect()}
            <StyledForm
                onSubmit={e => {
                    e.preventDefault();
                    datasetRequired && !formInput.dataset ? setDatasetInvalid(true) : setDatasetInvalid(false);
                    !formInput.aim ? setAimInvalid(true) : setAimInvalid(false);
                    requirementsRequired && !formInput.requirements
                        ? setRequirementsInvalid(true)
                        : setRequirementsInvalid(false);
                    ((datasetRequired && formInput.dataset) || !datasetRequired) &&
                        ((requirementsRequired && formInput.requirements) || !requirementsRequired) &&
                        formInput.aim &&
                        handleSubmit();
                }}
            >
                <StyledSmallBoldText>
                    {textItems.aimHeader}
                    <RedText>*</RedText>
                </StyledSmallBoldText>
                <StyledTextArea
                    invalid={aimInvalid}
                    cols={100}
                    id="aim"
                    labelText={textItems.aimHelpText}
                    value={formInput.aim || ""}
                    onChange={event => {
                        setFormInput({
                            ...formInput,
                            aim: event.target.value
                        });
                        setAimInvalid(false);
                    }}
                ></StyledTextArea>
                <TinySpace />
                <StyledSmallBoldText>
                    {textItems.datasetHeader}
                    <RedText>*</RedText>
                </StyledSmallBoldText>
                <StyledFormLabel>{textItems.datasetHelpText}</StyledFormLabel>
                <CheckboxItem
                    id="dataset-checkbox"
                    labelText={textItems.datasetCheckbox}
                    onChange={value => (value ? setDatasetRequired(false) : setDatasetRequired(true))}
                />
                <StyledTextArea
                    cols={100}
                    id="dataset"
                    invalid={datasetInvalid}
                    labelText={false}
                    disabled={!datasetRequired}
                    value={formInput.dataset || ""}
                    onChange={event => {
                        setFormInput({ ...formInput, dataset: event.target.value });
                        setDatasetInvalid(false);
                    }}
                ></StyledTextArea>
                <TinySpace />
                <StyledSmallBoldText>
                    {textItems.requirementsHeader}
                    <RedText>*</RedText>
                </StyledSmallBoldText>
                <StyledFormLabel>{textItems.requirementsHelpText}</StyledFormLabel>
                <CheckboxItem
                    id="requirements-checkbox"
                    labelText={textItems.requirementsCheckbox}
                    onChange={value => (value ? setRequirementsRequired(false) : setRequirementsRequired(true))}
                />
                <StyledTextArea
                    invalid={requirementsInvalid}
                    cols={100}
                    id="requirements"
                    labelText={false}
                    disabled={!requirementsRequired}
                    value={formInput.requirements || ""}
                    onChange={event => {
                        setFormInput({ ...formInput, requirements: event.target.value });
                        setRequirementsInvalid(false);
                    }}
                ></StyledTextArea>
                <TinySpace />
                <StyledSmallBoldText>{textItems.startDate}</StyledSmallBoldText>
                <StyledTextInput id="start-date" labelText={false}></StyledTextInput>
                <StyledSmallBoldText>{textItems.ico}</StyledSmallBoldText>
                <StyledTextInput id="ico" labelText={false}></StyledTextInput>
                <TinySpace />
                <StyledSmallBoldText>{textItems.benefitsHeader}</StyledSmallBoldText>
                <StyledTextArea cols={100} id="research" labelText={textItems.benefitsHelpText}></StyledTextArea>
                <TinySpace />
                <StyledSmallBoldText>{textItems.evidenceHeader}</StyledSmallBoldText>
                <StyledTextArea cols={100} id="evidence" labelText={textItems.evidenceHelpText}></StyledTextArea>
                <TinySpace />
                <StyledSmallBoldText>{textItems.contact}</StyledSmallBoldText>
                <StyledTextInput id="contact" labelText={false}></StyledTextInput>
                <TinySpace />
                <NewStyledButton kind="primary" type="submit">
                    {requestLoading ? <RightSmallInlineLoading /> : textItems.button}
                </NewStyledButton>
            </StyledForm>
        </SmallSpace>
    );
};

RequestPage.propTypes = {
    match: PropTypes.object
};

export default withRouter(RequestPage);
