import { gql } from "apollo-boost";

export const DATASET_COUNT = gql`
    {
        hdrDataModelSearch {
            count
        }
    }
`;
