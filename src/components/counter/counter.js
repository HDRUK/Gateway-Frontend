import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_SEARCH_AUDIT_LOG = gql`
    {
        searchAuditLog {
            created_on
            last_updated
            search_Detail
            searchAudit_ID
            search_user_ID
            search_end_point
        }
    }
`;

const Counter = () => {
    const { loading, error, data } = useQuery(GET_SEARCH_AUDIT_LOG);
    if (loading) return <p>Loading ...</p>;
    if (error) return <div>Error :(</div>;

    console.log("GET_SEARCH_AUDIT_LOG", data);

    return (
        <div>
            {data.searchAuditLog.map((log, i) => (
                <div key={`log-${i}`}>
                    <h1>{log.searchAudit_ID}</h1>
                    <ul>
                        <li>{log.created_on}</li>
                        <li>{log.last_updated}</li>
                        <li>{log.search_Detail}</li>
                        <li>{log.search_user_ID}</li>
                        <li>{log.search_end_point}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Counter;
