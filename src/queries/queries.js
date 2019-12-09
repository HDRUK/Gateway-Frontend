import gql from "graphql-tag";

export const DATASET_COUNT = gql`
    {
        hdrDataModelSearch {
            count
        }
    }
`;

export const CUSTOM_SEARCH = gql`
    query HdrCustomSearch($recordLimit: Int!, $recordOffset: Int!, $searchTerm: String!) {
        hdrCustomSearch(recordLimit: $recordLimit, recordOffset: $recordOffset, searchTerm: $searchTerm) {
            status
            message
            count
            data {
                id
                title
                abstract
                releaseDate
                publisher
            }
        }
    }
`;

export const SEARCH_AUDIT_LOG_SAVE = gql`
    mutation SearchAuditLogSave(
        $userId: String
        $searchTerm: String!
        $endPoint: String!
        $offSet: Int!
        $recordLimit: Int!
        $sort: SortInput!
        $filters: [FilterInput]
    ) {
        searchAuditLogSave(
            userId: $userId
            searchTerm: $searchTerm
            endPoint: $endPoint
            offSet: $offSet
            recordLimit: $recordLimit
            sort: $sort
            filters: $filters
        ) {
            status
            message
            data {
                id
            }
        }
    }
`;

export const SEARCH_SAVE = gql`
    mutation SearchSave($searchAuditId: String!, $userId: String!, $name: String) {
        searchSave(searchAuditId: $searchAuditId, userId: $userId, name: $name) {
            status
            message
        }
    }
`;

export const GET_SEARCH_SAVED_BY_USER_ID = gql`
    query GetSearchSavedByUserId($userId: String!) {
        getSearchSavedByUserID(userId: $userId) {
            status
            message
            data {
                id
                detail
                endPoint
                recordLimit
                recordOffset
                createdOn
                name
                filters {
                    type
                    value
                }
                sort {
                    applied
                    value
                }
            }
        }
    }
`;

export const RESULT_DETAIL = gql`
    query HdrDataModelID($ID: String!) {
        hdrDataModelID(ID: $ID) {
            status
            message
            count
            data {
                id
                domainType
                label
                aliases
                description
                author
                organisation
                editable
                documentationVersion
                lastUpdated
                classifiers {
                    id
                    label
                    lastUpdated
                }
                type
                finalised
            }
        }
    }
`;

export const DELETE_SAVED_SEARCH = gql`
    mutation SearchDelete($ID: String!) {
        searchDelete(searchSavedId: $ID) {
            status
            message
        }
    }
`;
