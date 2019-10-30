import { gql } from "apollo-boost";

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
    }
];

export default mocks;
