import gql from "graphql-tag";

export const CATALOGUE_ITEMS_SEARCH = gql`
    query HdrCatalogueItemsSearch($recordLimit: Int!, $recordOffset: Int!, $searchTerm: String!) {
        hdrCatalogueItemsSearch(recordLimit: $recordLimit, recordOffset: $recordOffset, searchTerm: $searchTerm) {
            status
            message
            count
            data {
                id
                description
                label
            }
        }
    }
`;

export const SEARCH_SAVE = gql`
    mutation SearchSave(
        $userId: String!
        $searchTerm: String!
        $endPoint: String!
        $offSet: Int!
        $recordLimit: Int!
        $sort: SortInput!
        $filters: [FilterInput]
        $name: String
    ) {
        searchSave(
            userId: $userId
            searchTerm: $searchTerm
            endPoint: $endPoint
            offSet: $offSet
            recordLimit: $recordLimit
            sort: $sort
            filters: $filters
            name: $name
        ) {
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
