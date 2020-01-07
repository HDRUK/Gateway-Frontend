import gql from "graphql-tag";

import { CUSTOM_SEARCH } from "../queries/queries.js";
import { GET_SEARCH_SAVED_BY_USER_ID } from "../queries/queries.js";

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
        request: { query: CUSTOM_SEARCH, variables: { recordLimit: 10, recordOffset: 0, searchTerm: "test" } },
        result: {
            data: {
                hdrCustomSearch: {
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
    },
    {
        request: {
            query: GET_SEARCH_SAVED_BY_USER_ID,
            variables: { userId: "test", sortField: { applied: "created_on", value: "DESC" } }
        },
        result: {
            data: {
                getSearchSavedByUserID: {
                    status: "200",
                    message: "Search saved data",
                    data: [
                        {
                            id: "1",
                            detail: "test",
                            endPoint: "http://localhost:5001",
                            recordLimit: 10,
                            recordOffset: 0,
                            createdOn: "01 Nov 2019",
                            name: null,
                            filters: [
                                {
                                    type: "Geography",
                                    value: "England"
                                }
                            ],
                            sort: {
                                applied: "Alphabetical",
                                value: "ASC"
                            }
                        },
                        {
                            id: "2",
                            detail: "test2",
                            endPoint: "http://localhost:5001",
                            recordLimit: 10,
                            recordOffset: 0,
                            createdOn: "02 Nov 2019",
                            name: "Test 2",
                            filters: [
                                {
                                    type: "Geography",
                                    value: "Scotland"
                                }
                            ],
                            sort: {
                                applied: "Alphabetical",
                                value: "Down"
                            }
                        }
                    ]
                }
            }
        }
    },
    {
        request: {
            query: GET_SEARCH_SAVED_BY_USER_ID,
            variables: { userId: "test", sortField: { applied: "created_on", value: "DESC" } }
        },
        result: {
            data: {
                getSearchSavedByUserID: {
                    status: "200",
                    message: "Search saved data",
                    data: [
                        {
                            id: "1",
                            detail: "test",
                            endPoint: "http://localhost:5001",
                            recordLimit: 10,
                            recordOffset: 0,
                            createdOn: "01 Nov 2019",
                            name: null,
                            filters: [
                                {
                                    type: "Geography",
                                    value: "England"
                                }
                            ],
                            sort: {
                                applied: "Alphabetical",
                                value: "ASC"
                            }
                        },
                        {
                            id: "2",
                            detail: "test2",
                            endPoint: "http://localhost:5001",
                            recordLimit: 10,
                            recordOffset: 0,
                            createdOn: "02 Nov 2019",
                            name: "Test 2",
                            filters: [
                                {
                                    type: "Geography",
                                    value: "Scotland"
                                }
                            ],
                            sort: {
                                applied: "Alphabetical",
                                value: "Down"
                            }
                        }
                    ]
                }
            }
        }
    }
];

export default mocks;
