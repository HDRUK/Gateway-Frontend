import React, { useState, useContext } from "react";
import {
    LightText,
    StyledSmallBoldText,
    SmallSpace,
    TinySpace,
    RedText,
    StyledHeading,
    ThreeColumnForm,
    OneThirdFormWidth,
    TwoThirdFormWidth,
    HalfFormWidth,
    StyledSmallText
} from "../../styles/styles";
import { LoadingButton, LoadingWheel } from "./styles.js";
import {
    StyledForm,
    StyledTextInput,
    CheckboxItem,
    StyledFormLabel,
    StyledTextArea,
    CenterLoading,
    DateSelector,
    DateInput,
    StyledModal
} from "../../styles/carbonComponents";
import axios from "axios";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { renderEmail } from "react-html-email";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

const textItems = {
    heading: "Enquire About",
    infoLead:
        "If the information is available, please ensure your request is in line with the Data Access requirements for the given dataset.",
    aimHeader: "Research Purpose",
    aimHelpText: "Please briefly explain the purpose of your research and why you require access to the dataset.",
    datasetHeader: "Linked Datasets",
    datasetHelpText: "Please identify the names of any datasets you would like to link with this one.",
    datasetCheckbox: "I don't want to link any datasets.",
    requirementsHeader: "Data Field Requirements",
    requirementsHelpText: "Please explain which fields of the dataset you are interested in.",
    requirementsCheckbox: "I don't know.",
    startDate: "Proposed Project Start Date",
    ico: "ICO Registration",
    benefitsHeader: "Research Impact",
    benefitsHelpText: "Please provide evidence of how your research will benefit the health and social care system.",
    evidenceHeader: "Ethical Processing Evidence",
    evidenceHelpText:
        "Please provide a link(s) to relevant sources that showcase evidence of the ethical and legally compliant processing of data by your organisation.",
    contact: "Contact Number",
    button: "Submit Enquiry",
    infoEnd: "By submitting an enquiry you agree to Health Data Research UK’s Innovation Gateway terms and conditions.",
    modalHeading: "Enquiry sent",
    modalContent: "How to prepare for requesting a dataset:",
    modalLink: "https://healthdatagateway.org/guidelines",
    fromEmail: "Email Address"
};

const RequestPage = props => {
    const appContext = useContext(AppContext);
    const [datasetRequired, setDatasetRequired] = useState(true);
    const [aimInvalid, setAimInvalid] = useState(false);
    const [fromEmailValid, setFromEmailValid] = useState(false);
    const [datasetInvalid, setDatasetInvalid] = useState(false);
    const [requirementsInvalid, setRequirementsInvalid] = useState(false);

    const [redirect, setRedirect] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

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
    const ValidateEmail = mail => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            // setFromEmailValid(true);
            return true;
        }
        // setFromEmailValid(false);

        return false;
    };
    const resetForm = () => {
        setFormInput({});
    };

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to={`/detail/${detailData.id}`} />;
        }
    };

    let variables = {
        userId: appContext.userId,
        dataModelId: detailData.id,
        aim: formInput.aim,
        linkedDatasets: formInput.dataset || "No linked datasets",
        requirements: formInput.requirements || "Requirements unknown",
        startDate: formInput.startDate,
        ico: formInput.ico,
        benefits: formInput.benefits,
        evidence: formInput.evidence,
        number: formInput.number,
        recipient: detailData.contactPoint,
        fromEmal: formInput.fromEmail
    };

    const saveAccessRequest = () => {
        appContext.saveAccessRequest({ variables });
    };

    const handleSubmit = () => {
        setRequestLoading(true);
        const messageHtml = renderEmail(
            <div>
                <p>{`An enquiry to the access the ${detailData.title} dataset has been made. Please see the full details of the enquiry below:`}</p>
                <p> {`Research purpose: ${formInput.aim}`}</p>
                <p> {`Linked datasets: ${formInput.datasets || "No linked datasets"}`}</p>
                <p> {`Data field requirements: ${formInput.requirements || "Requirements unknown"}`}</p>
                {formInput.startDate && <p>{`Proposed project start date: ${formInput.startDate}`}</p>}
                {formInput.ico && <p>{`ICO registration: ${formInput.ico}`}</p>}
                {formInput.benefits && <p>{`Research benefits: ${formInput.benefits}`}</p>}
                {formInput.evidence && <p>{`Ethical processing evidence: ${formInput.evidence}`}</p>}
                {formInput.number && <p>{`Contact number: ${formInput.number}`}</p>}
                {formInput.fromEmail && <p>{`Email Address: ${formInput.fromEmail}`}</p>}
            </div>
        );

        axios({
            method: "POST",
            url: "/send",
            data: {
                // sender: appContext.userEmail,
                sender: formInput.fromEmai,
                recipient: detailData.contactPoint,
                // recipient: "",
                title: detailData.title,
                messageHtml: messageHtml
            }
        }).then(response => {
            setRequestLoading(false);
            if (response.data.msg === "success") {
                saveAccessRequest();
                setModalOpen(true);
            } else {
                alert(`Something went wrong. Try again  ${response.data.msg}`);
            }
        });
    };

    return (
        <div>
            <StyledSmallBoldText>
                <LightText>{textItems.heading.toUpperCase()}</LightText>
            </StyledSmallBoldText>
            <StyledHeading>{detailData.title}</StyledHeading>
            <SmallSpace />
            <RedText>{textItems.infoLead}</RedText>
            <SmallSpace />
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
                    ValidateEmail(formInput.fromEmail)
                        ? setFromEmailValid(true)
                        : setFromEmailValid(false) && handleSubmit();
                }}
            >
                <StyledSmallBoldText>
                    {textItems.aimHeader}
                    <RedText>*</RedText>
                </StyledSmallBoldText>
                <StyledTextArea
                    invalid={aimInvalid}
                    cols={500}
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
                    cols={500}
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
                    cols={500}
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
                <ThreeColumnForm>
                    <OneThirdFormWidth>
                        <StyledSmallBoldText>{textItems.startDate}</StyledSmallBoldText>
                        <DateSelector
                            datePickerType="single"
                            dateFormat="d/m/Y"
                            value={formInput.startDate}
                            onChange={eventOrDates => {
                                const value = eventOrDates.target ? eventOrDates.target.value : eventOrDates[0];
                                setFormInput({ ...formInput, startDate: value });
                            }}
                        >
                            <DateInput id="start-date" labelText={false} placeholder="dd/mm/yyyy" />
                        </DateSelector>
                    </OneThirdFormWidth>
                    <TinySpace />
                    <TwoThirdFormWidth>
                        <StyledSmallBoldText>{textItems.ico}</StyledSmallBoldText>
                        <StyledTextInput
                            id="ico"
                            labelText={false}
                            onChange={event => {
                                setFormInput({ ...formInput, ico: event.target.value });
                            }}
                            value={formInput.ico || ""}
                        ></StyledTextInput>
                    </TwoThirdFormWidth>
                </ThreeColumnForm>
                <TinySpace />
                <StyledSmallBoldText>{textItems.benefitsHeader}</StyledSmallBoldText>
                <StyledTextArea
                    cols={500}
                    id="research"
                    labelText={textItems.benefitsHelpText}
                    onChange={event => {
                        setFormInput({ ...formInput, benefits: event.target.value });
                    }}
                    value={formInput.benefits || ""}
                ></StyledTextArea>
                <TinySpace />
                <StyledSmallBoldText>{textItems.evidenceHeader}</StyledSmallBoldText>
                <StyledTextArea
                    cols={500}
                    id="evidence"
                    labelText={textItems.evidenceHelpText}
                    onChange={event => {
                        setFormInput({ ...formInput, evidence: event.target.value });
                    }}
                    value={formInput.evidence || ""}
                ></StyledTextArea>
                <TinySpace />
                <HalfFormWidth>
                    <StyledSmallBoldText>{textItems.contact}</StyledSmallBoldText>
                    <StyledTextInput
                        id="contact"
                        labelText={false}
                        onChange={event => {
                            setFormInput({ ...formInput, number: event.target.value });
                        }}
                        value={formInput.number || ""}
                    ></StyledTextInput>
                </HalfFormWidth>
                <TinySpace />
                <HalfFormWidth>
                    <StyledSmallBoldText>{textItems.fromEmail}</StyledSmallBoldText>
                    <StyledTextInput
                        id="fromEmail"
                        invalid={!fromEmailValid}
                        labelText={false}
                        onChange={event => {
                            setFormInput({
                                ...formInput,
                                fromEmail: event.target.value
                            });
                        }}
                        value={formInput.fromEmail || ""}
                    ></StyledTextInput>
                </HalfFormWidth>
                <TinySpace />
                <RedText>{textItems.infoEnd}</RedText>
                <TinySpace />
                <LoadingButton kind="primary" type="submit">
                    {requestLoading ? <LoadingWheel /> : textItems.button}
                </LoadingButton>
                <SmallSpace />
            </StyledForm>
            <SmallSpace />

            <StyledModal
                id="email-success-modal"
                open={modalOpen}
                passiveModal={true}
                onRequestClose={() => {
                    setModalOpen(false);
                    setRedirect(true);
                    resetForm();
                }}
                modalHeading={textItems.modalTitle}
            >
                <StyledHeading>{textItems.modalHeading}</StyledHeading>
                <StyledSmallText>{textItems.modalContent}</StyledSmallText>
                <StyledSmallText>
                    <a href="/guidelines">{textItems.modalLink}</a>
                </StyledSmallText>
            </StyledModal>
        </div>
    );
};

RequestPage.propTypes = {
    match: PropTypes.object
};

export default withRouter(RequestPage);
