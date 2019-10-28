// import { Font } from "../../styles/styles.js";
import React from "react";
import styled from "styled-components";

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
    color: blue;
    font-size: 0.8rem;
    text-decoration: none;
`;

const NewsTile = props => (
    <NewsTileWrapper>
        <ImageSection src={props.image} />
        <TextSection>
            <Description>{props.description}</Description>
            {props.readMore && <ReadMore href={props.readMore}>Read more</ReadMore>}
        </TextSection>
    </NewsTileWrapper>
);

export default NewsTile;
