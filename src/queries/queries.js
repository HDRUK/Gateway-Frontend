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
