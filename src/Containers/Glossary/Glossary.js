import React from "react";

import { Heading, DarkText, SmallSpace, Table, TR, TH, TD } from "../../styles/styles.js";

const textItems = {
    mainHeading: "Key Terms Glossary"
};

const Glossary = () => {
    return (
        <DarkText>
            <Heading>{textItems.mainHeading}</Heading>
            <SmallSpace />
            <Table>
                <TR>
                    <TH colspan="2">Section</TH>
                    <TH colspan="6">Term</TH>
                    <TH colspan="12">Definition</TH>
                </TR>
                <TR>
                    <TD rowSpan="3">Filter</TD>
                    <TD>License</TD>
                    <TD>A legal document under which the distribution is made available.</TD>
                </TR>
                <TR>
                    <TD>Publisher</TD>
                    <TD>The entity responsible for making the item available.</TD>
                </TR>
                <TR>
                    <TD>Physical samples</TD>
                    <TD>
                        Availability of physical samples associated with the dataset, description of the samples
                        available and process for access.
                    </TD>
                </TR>
            </Table>
        </DarkText>
    );
};

export default Glossary;
