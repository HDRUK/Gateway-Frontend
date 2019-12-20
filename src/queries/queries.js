import gql from "graphql-tag";

export const DATASET_COUNT = gql`
    {
        hdrDataModelSearch {
            count
        }
    }
`;

export const CUSTOM_SEARCH = gql`
    query HdrCustomSearch(
        $recordLimit: Int!
        $recordOffset: Int!
        $searchTerm: String!
        $filterItems: [String]
        $sortField: String
    ) {
        hdrCustomSearch(
            recordLimit: $recordLimit
            recordOffset: $recordOffset
            searchTerm: $searchTerm
            filterItems: $filterItems
            sortField: $sortField
        ) {
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
    query GetSearchSavedByUserId($userId: String!, $sortField: SortInput) {
        getSearchSavedByUserID(userId: $userId, sortField: $sortField) {
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

export const REQUEST_ACCESS = gql`
    mutation RequestAccess(
        $userId: String!
        $dataModelId: String!
        $aim: String!
        $linkedDatasets: String!
        $requirements: String!
        $startDate: String
        $ico: String
        $benefits: String
        $evidence: String
        $number: String
        $recipient: String
    ) {
        requestAccess(
            userId: $userId
            dataModelId: $dataModelId
            aim: $aim
            linkedDatasets: $linkedDatasets
            requirements: $requirements
            startDate: $startDate
            ico: $ico
            benefits: $benefits
            evidence: $evidence
            number: $number
            recipient: $recipient
        ) {
            status
            message
        }
    }
`;

export const GET_ACCESS_REQUESTS_BY_USER_ID = gql`
    query GetAccessRequestsByUserID($userId: String!, $sortField: SortInput) {
        getAccessRequestsByUserID(userId: $userId, sortField: $sortField) {
            status
            message
            data {
                id
                dataModelId
                aim
                linkedDatasets
                requirements
                startDate
                ico
                benefits
                evidence
                contactNumber
                recipient
                createdOn
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
                title
                releaseDate
                publisher
                license
                accessRequestDuration
                conformsTo
                abstract
                accessRequestCost
                dataController
                dataProcessor
                accessRights
                jurisdiction
                geographicCoverage
                datasetStartDate
                datasetEndDate
                periodicity
                statisticalPopulation
                ageBand
                physicalSampleAvailability
                group
                linkedDataset
                derivedDatasets
                creator
                citations
                contactPoint
            }
        }
    }
`;

export const RESULT_DETAIL_SHORT = gql`
    query HdrDataModelID($ID: String!) {
        hdrDataModelID(ID: $ID) {
            status
            message
            count
            data {
                id
                title
                abstract
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

export const GET_FILTER_VALUES = gql`
    query GetFilterValues {
        hdrFilterValues {
            status
            message
            data {
                fieldName
                fieldValues
            }
        }
    }
`;
