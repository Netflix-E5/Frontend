import React from "react";
import styled from "styled-components";

function TextBtn({ icon, text, size = "small", type, handler }) {
  return (
    <Wrapper size={size} type={type} onClick={handler}>
      <div>{icon}</div>
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
      case "transparent":
        return props.theme.transparentBtnColor;
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
      case "transparent":
        return "white";
      default:
        return "white";
    }
  }};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${(props) => props.theme.bold};

  :hover {
    text-decoration: ${(props) => (props.type === "light" ? "underline" : "")};
    background-color: ${(props) =>
      props.type === "transparent" ? "rgba(109, 109, 110, 0.4)" : ""};
  }
`;

export default TextBtn;
