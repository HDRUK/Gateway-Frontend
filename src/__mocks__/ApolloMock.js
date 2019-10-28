import { gql } from "apollo-boost";

const GET_SEARCH_AUDIT_LOG = gql`
    {
        searchAuditLog {
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
                searchAuditLog: [
                    {
                        __typename: "SearchAudit_log",
                        created_on: "1571736386903",
                        last_updated: "1571736386903",
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
