import { gql } from "apollo-boost";

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
