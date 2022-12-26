import React from "react";
import styled from "styled-components";

function TextBtn({ text, size = "small", type }) {
  return (
    <Wrapper size={size} type={type}>
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  margin: 24px 0 12px;
  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "";
      case "medium":
        return "100%";
      default:
        return "";
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "7px 17px";
      case "medium":
        return "16px";
      default:
        return "0.8rem 2rem 0.8rem 2.4rem";
    }
  }};
  background: ${(props) => {
    switch (props.type) {
      case "accent":
        return props.theme.accentColor;
      case "light":
        return "white";
      default:
        return props.theme.accentColor;
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case "accent":
        return "white";
      case "light":
        return "black";
      default:
        return "white";
    }
  }};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${(props) => props.theme.bold};

  :hover {
    text-decoration: underline;
  }
`;

export default TextBtn;
