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
                    <TD rowSpan="6">Filter</TD>
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
                <TR>
                    <TD>Age Band</TD>
                    <TD>The age range of the individuals included within data.</TD>
                </TR>
                <TR>
                    <TD>Geographic coverage</TD>
                    <TD>The geographical area covered by the dataset.</TD>
                </TR>
                <TR>
                    <TD>Jurisdiction</TD>
                    <TD>
                        A named and identified geospatial area with defined borders which is used for exercising the
                        action of the Rule.
                    </TD>
                </TR>
                <TR>
                    <TD rowSpan="6">DS: Top of page info</TD>
                    <TD>Release date</TD>
                    <TD>Date of formal issuance of the distribution.</TD>
                </TR>
                <TR>
                    <TD>Publisher</TD>
                    <TD>
                        The entity responsible for making the item available, as well as publishing and maintaining the
                        metadata.
                    </TD>
                </TR>
                <TR>
                    <TD>License</TD>
                    <TD>A legal document under which the distribution is made available.</TD>
                </TR>
                <TR>
                    <TD>Request time</TD>
                    <TD>An indication of the typical duration of a data access request.</TD>
                </TR>
                <TR>
                    <TD>Standard</TD>
                    <TD>An established standard to which the described resource conforms.</TD>
                </TR>
                <TR>
                    <TD>Abstract</TD>
                    <TD>A summary of the resource.</TD>
                </TR>
                <TR>
                    <TD rowSpan="3">DS: Data access</TD>
                    <TD>Access request cost</TD>
                    <TD>The total cost for having access to the dataset.</TD>
                </TR>
                <TR>
                    <TD>Data controller</TD>
                    <TD>
                        The person who determines the purposes for which and the manner in which any personal data is
                        processed.
                    </TD>
                </TR>
                <TR>
                    <TD>Data processor</TD>
                    <TD>
                        Any person (other than an employee of the data controller) in relation to personal data, who
                        processes the data on behalf of the data controller.
                    </TD>
                </TR>
                <TR>
                    <TD rowSpan="4">DS: Coverage</TD>
                    <TD>Jurisdiction</TD>
                    <TD>
                        A named and identified geospatial area with defined borders which is used for exercising the
                        action of the Rule.
                    </TD>
                </TR>
                <TR>
                    <TD>Geographic coverage</TD>
                    <TD>The geographical area covered by the dataset.</TD>
                </TR>
                <TR>
                    <TD>Date coverage</TD>
                    <TD>The period of time of which the dataset covers.</TD>
                </TR>
                <TR>
                    <TD>Periodicity</TD>
                    <TD>The frequency at which dataset is published.</TD>
                </TR>
                <TR>
                    <TD rowSpan="2">DS: Demographics</TD>
                    <TD>Statistical population</TD>
                    <TD>The primary population size and type within the dataset.</TD>
                </TR>
                <TR>
                    <TD>Age band</TD>
                    <TD>The age range of the individuals included within data.</TD>
                </TR>
                <TR>
                    <TD rowSpan="1">DS: Related resources</TD>
                    <TD>Physical sample availability</TD>
                    <TD>
                        Availability of physical samples associated with the dataset, description of the samples
                        available and process for access.
                    </TD>
                </TR>
                <TR>
                    <TD rowSpan="3">DS: Related datasets</TD>
                    <TD>Group</TD>
                    <TD>Information on whether the dataset is part of a wider group.</TD>
                </TR>
                <TR>
                    <TD>Linked datasets</TD>
                    <TD>
                        A description of a relationship with another resource RDF Property where the nature of the
                        relationship is known but does not match one of the standard properties.
                    </TD>
                </TR>
                <TR>
                    <TD>Derived datasets</TD>
                    <TD>
                        An update of an entity resulting in a new one, or the construction of a new entity based on a
                        pre-existing entity.
                    </TD>
                </TR>
                <TR>
                    <TD rowSpan="2">DS: Attributions</TD>
                    <TD>Creator</TD>
                    <TD>The person who created the dataset.</TD>
                </TR>
                <TR>
                    <TD>Citations</TD>
                    <TD>A publication where the dataset has been used.</TD>
                </TR>
            </Table>
            <SmallSpace />
        </DarkText>
    );
};

export default Glossary;
