// import { Font } from "../../styles/styles.js";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const NewsTileItem = styled.div`
    display: inline-block;
    margin-right: 2rem;

    :last-child {
        margin-right: 0;
    }
`;

const NewsTileGroup = props => (
    <Wrapper>
        {props.children.map((newsTile, i) => (
            <NewsTileItem key={`newsTileItem-${i}`}>{newsTile}</NewsTileItem>
        ))}
    </Wrapper>
);

export default NewsTileGroup;
