import React, { useState } from "react";
import { LightText, StyledSmallBoldText, SmallSpace, TinySpace, RedText } from "../../styles/styles";
import {
    StyledForm,
    StyledTextInput,
    NewStyledButton,
    CheckboxItem,
    StyledFormLabel,
    StyledTextArea
} from "../../styles/carbonComponents";

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

const RequestPage = () => {
    const [datasetRequired, setDatasetRequired] = useState(true);
    const [datasetInvalid, setDatasetInvalid] = useState(false);
    const [datasetInput, setDatasetInput] = useState("");
    const [requirementsInput, setRequirementsInput] = useState("");

    const [requirementsRequired, setRequirementsRequired] = useState(true);
    return (
        <SmallSpace>
            <StyledSmallBoldText>
                <LightText>{textItems.heading.toUpperCase()}</LightText>
            </StyledSmallBoldText>
            <SmallSpace></SmallSpace>
            <StyledForm
                onSubmit={e => {
                    e.preventDefault();
                    datasetRequired && datasetInput === "" ? setDatasetInvalid(true) : setDatasetInvalid(false);
                }}
            >
                <StyledSmallBoldText>
                    {textItems.aimHeader}
                    <RedText>*</RedText>
                </StyledSmallBoldText>
                <StyledTextArea cols={100} id="aim" labelText={textItems.aimHelpText}></StyledTextArea>
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
                    value={datasetInput}
                    onChange={event => {
                        setDatasetInput(event.target.value);
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
                    cols={100}
                    id="requirements"
                    labelText={false}
                    disabled={!requirementsRequired}
                    value={requirementsInput}
                    onChange={event => {
                        setRequirementsInput(event.target.value);
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
                    {textItems.button}
                </NewStyledButton>
            </StyledForm>
        </SmallSpace>
    );
};

export default RequestPage;
