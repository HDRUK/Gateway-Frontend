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
import axios from "axios";

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
    const [aimInvalid, setAimInvalid] = useState(false);
    const [datasetInvalid, setDatasetInvalid] = useState(false);
    const [requirementsInvalid, setRequirementsInvalid] = useState(false);

    const [formInput, setFormInput] = useState({});
    const [requirementsRequired, setRequirementsRequired] = useState(true);

    const [formInvalid] = useState(datasetInvalid || aimInvalid || requirementsInvalid ? true : false);

    const handleSubmit = () => {
        // const messageHtml = renderEmail(<MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>);

        axios({
            method: "POST",
            url: "http://localhost:5003/send",
            data: {
                name: "",
                email: "",
                messageHtml: "heelo"
            }
        }).then(response => {
            if (response.data.msg === "success") {
                alert("Email sent, awesome!");
                this.resetForm();
            } else if (response.data.msg === "fail") {
                alert("Oops, something went wrong. Try again");
            }
        });
    };
    const resetForm = () => {
        setFormInput({});
    };

    return (
        <SmallSpace>
            <StyledSmallBoldText>
                <LightText>{textItems.heading.toUpperCase()}</LightText>
            </StyledSmallBoldText>
            <SmallSpace></SmallSpace>
            <StyledForm
                onSubmit={e => {
                    e.preventDefault();
                    datasetRequired && !formInput.dataset ? setDatasetInvalid(true) : setDatasetInvalid(false);
                    !formInput.aim ? setAimInvalid(true) : setAimInvalid(false);
                    requirementsRequired && !formInput.requirements
                        ? setRequirementsInvalid(true)
                        : setRequirementsInvalid(false);
                    !formInvalid && handleSubmit();
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
                    {textItems.button}
                </NewStyledButton>
            </StyledForm>
        </SmallSpace>
    );
};

export default RequestPage;
