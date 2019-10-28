import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NewsTile = props => (
    <NewsTileWrapper>
        <ImageSection src={props.image} />
        <TextSection>
            <Description>{props.description}</Description>
            {props.readMore && <ReadMore href={props.readMore}>Read more</ReadMore>}
        </TextSection>
    </NewsTileWrapper>
);

NewsTile.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    readMore: PropTypes.string
};

const NewsTileWrapper = styled.div`
    display: inline-block;
    width: 18rem;
    height: 18rem;
`;

const ImageSection = styled.div`
    height: 12rem;
    background-color: #64696c;
`;

const TextSection = styled.div`
    box-sizing: border-box;
    height: 6rem;
    background-color: #b5bcbd;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 300;
`;

const Description = styled.div`
    height: 3rem;
    max-height: 3rem;
`;

const ReadMore = styled.a`
    display: block;
    color: #2e66a2;
    font-size: 0.8rem;
    font-weight: 300;
    text-decoration: none;
`;

export default NewsTile;
