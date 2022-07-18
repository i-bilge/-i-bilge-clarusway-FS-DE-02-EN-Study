import styled from "styled-components";

export default styled.button`
    background-color: ${props => props.bgColor ? props.bgColor : "bisquit"};
    color: ${props => props.textColor ? props.textColor : "black"};
    border: non;
    margin: 2px;
    padding: 12px 28px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 18px;
`