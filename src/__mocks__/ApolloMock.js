import { gql } from "apollo-boost";

import { CATALOGUE_ITEMS_SEARCH } from "../queries/queries.js";
import { Description } from "../styles/styles.js";

const GET_SEARCH_AUDIT_LOG = gql`
    {
        getSearchAuditLog {
            __typename
            created_on
            last_updated
            search_Detail
            searchAudit_ID
            search_user_ID
            search_end_point
        }
    }
`;

const mocks = [
    {
        request: { query: GET_SEARCH_AUDIT_LOG },
        result: {
            data: {
                getSearchAuditLog: [
                    {
                        __typename: "SearchAudit_log",
                        created_on: "2019-10-22 10:26:26.903665+01",
                        last_updated: "2019-10-22 10:26:26.903665+01",
                        search_Detail: "https://theapi/thesearch?param1=1",
                        searchAudit_ID: "1",
                        search_user_ID: "ANON",
                        search_end_point: "theapi"
                    }
                ]
            }
        }
    },
    {
        request: { query: CATALOGUE_ITEMS_SEARCH, variables: { recordLimit: 10, recordOffset: 0, searchTerm: "test" } },
        result: {
            data: {
                hdrCatalogueItemsSearch: {
                    status: "200",
                    message: "OK",
                    count: "123",
                    data: [
                        {
                            id: "1",
                            description: "description",
                            label: "label"
                        },
                        {
                            id: "2",
                            description: "description",
                            label: "label"
                        }
                    ]
                }
            }
        }
    }
];

export default mocks;
