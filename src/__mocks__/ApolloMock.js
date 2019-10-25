import { gql } from "apollo-boost";

const GET_BOOKS = gql`
    {
        books {
            __typename
            title
            author
        }
    }
`;

const mocks = [
    {
        request: { query: GET_BOOKS },
        result: {
            data: {
                books: [
                    {
                        __typename: "Book",
                        title: "Jurassic Park",
                        author: "Michael Crichton"
                    }
                ]
            }
        }
    }
];

export default mocks;
