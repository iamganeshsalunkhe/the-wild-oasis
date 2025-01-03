import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
        font-size: 50px;
        font-weight: 600;
        background-color: yellow;
        border-radius: 10px;
    `}
    ${props=>props.as  === 'h2' && css`
        font-size: 35px;
        font-weight: 500;
        background-color: yellow;
    `}
    ${props=>props.as ==='h3' && css`
        font-size: 20px;
        font-weight: 400;
        background-color: yellow;
    `}
`;

export default Heading;