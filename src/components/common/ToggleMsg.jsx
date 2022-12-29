import React from "react";
import styled from "styled-components";

function ToggleMsg({ text, position, show }) {
  return (
    <Wrapper position={`${position}px`} show={show}>
      <MsgBox>{text}</MsgBox>
      <MsgCaret />
      <MsgShadowBox>{text}</MsgShadowBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.position};
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MsgBox = styled.div`
  position: relative;
  padding: 5px 10px;
  background-color: #fffffe;
  border-radius: 5px;
  font-size: 20px;
  color: black;
`;

const MsgCaret = styled.div`
  width: 10px;
  border-color: #fffffe transparent transparent;
  border-style: solid;
  border-width: 10px 10px 0;
`;

const MsgShadowBox = styled(MsgBox)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
`;

export default ToggleMsg;
