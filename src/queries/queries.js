import { gql } from "apollo-boost";

export const CATALOGUE_ITEMS_SEARCH = gql`
    query HdrCatalogueItemsSearch($searchTerm: String!) {
        hdrCatalogueItemsSearch(recordLimit: 10, recordOffset: 0, searchTerm: $searchTerm) {
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
