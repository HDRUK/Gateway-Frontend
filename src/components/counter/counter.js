import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const BOOKS = gql`
    {
        books {
            __typename
            title
            author
        }
    }
`;

const Counter = () => {
    const { loading, error, data } = useQuery(BOOKS);
    if (loading) return <p>Loading ...</p>;
    if (error) return <div>Error :(</div>;

    return (
        <AppContext.Consumer>
            {appContext => (
                <div>
                    <p onClick={appContext.counterFunc}>{appContext.state.counter}</p>
                    {data.books.map((book, i) => (
                        <p key={`book-${i}`}>
                            {book.title}: {book.author}
                        </p>
                    ))}
                </div>
            )}
        </AppContext.Consumer>
    );
};

export default Counter;
