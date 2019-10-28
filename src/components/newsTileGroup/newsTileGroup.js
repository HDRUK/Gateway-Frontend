import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NewsTileGroup = props => (
    <Wrapper>
        {props.children.map((newsTile, i) => (
            <NewsTileItem key={`newsTileItem-${i}`}>{newsTile}</NewsTileItem>
        ))}
    </Wrapper>
);

NewsTileGroup.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

const Wrapper = styled.div``;

const NewsTileItem = styled.div`
    display: inline-block;
    margin-right: 2rem;

    :last-child {
        margin-right: 0;
    }
`;

export default NewsTileGroup;
