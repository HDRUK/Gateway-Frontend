import { gql } from "apollo-boost";

export const DATASET_COUNT = gql`
    {
        hdrDataModelSearch {
            count
        }
    }
`;

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
