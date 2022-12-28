import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { __postSignup } from "../redux/modules/UserSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [checkbox, setCheckbox] = useState(false);
  const [showEmailError, setEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showNicknameError, setShowNicknameError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [borderEmailColor, setBorderEmailColor] = useState("black");
  const [borderPwColor, setBorderPwColor] = useState("black");
  const [borderNicknameColor, setBorderNicknameColor] = useState("black");

  const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/);

  const emailChange = (event) => {
    setEmail(event.target.value);

    if (!emailRegex.test(event.target.value) || !event.target.value.trim()) {
      if (!isFocused) {
        setEmailError(true);
        setBorderEmailColor("#b92d2b");
      }
    } else {
      setEmailError(false);
      setBorderEmailColor("lightgreen");
    }
  };

  const emailFocus = () => {
    setIsFocused(true);
  };

  const emailBlur = (event) => {
    setIsFocused(false);
    if (!emailRegex.test(event.target.value)) {
      setEmailError(true);
      setBorderEmailColor("#b92d2b");
    }
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6) {
      if (!isFocused) {
        setShowPasswordError(true);
        setBorderPwColor("#b92d2b");
      }
    } else {
      setShowPasswordError(false);
      setBorderPwColor("lightgreen");
    }
  };

  const passwordFocus = () => {
    setIsFocused(true);
  };

  const passwordBlur = () => {
    setIsFocused(false);
    if (password.length < 6) {
      setShowPasswordError(true);
      setBorderPwColor("#b92d2b");
    }
  };

  const nicknameChange = (event) => {
    setNickname(event.target.value);
    if (event.target.value.length < 2 || event.target.value.length > 8) {
      if (!isFocused) {
        setShowNicknameError(true);
        setBorderNicknameColor("#b92d2b");
      }
    } else {
      setShowNicknameError(false);
      setBorderNicknameColor("lightgreen");
    }
  };

  const nicknameFocus = () => {
    setIsFocused(true);
  };

  const nciknameBlur = () => {
    setIsFocused(false);
    if (nickname.length < 2 || nickname.length > 8) {
      setShowNicknameError(true);
      setBorderNicknameColor("#b92d2b");
    }
  };

  const checkErrorRemove = (event) => {
    setCheckbox(event.target.checked);
    setCheckboxError(false);
  };

  const regButton = (event) => {
    event.preventDefault();
    const checkbox = document.getElementById("check1");
    if (!checkbox.checked) {
      setCheckboxError(true);
    } else if (
      borderEmailColor === "lightgreen" &&
      borderPwColor === "lightgreen" &&
      borderNicknameColor == "lightgreen" &&
      !checkboxError
    ) {
      dispatch(
        __postSignup({ email: email, password: password, nickname: nickname })
      );
    }
  };

  return (
    <Signupcontainer>
      <SigninBody>
        <Signuptitle>
          이메일과 비밀번호를 설정해 멤버십을 시작하세요.
        </Signuptitle>
        <Signupcontent>
          간단한 절차로 넷플릭스 가입완료! <p />
          복잡한 단계는 모두 없앴습니다.
        </Signupcontent>
        <FloatingLabel
          controlId="floatingInput"
          label="이메일주소"
          className="mb-3"
          style={{
            color: "#363636",
            fontWeight: "100",
            fontSize: "15px",
          }}
        >
          <Form.Control
            type="email"
            placeholder="이메일주소"
            value={email}
            onChange={emailChange}
            onFocus={emailFocus}
            onBlur={emailBlur}
            style={{
              backgroundColor: "#ffffff",
              color: "black",
              fontFamily: "netflixLight",
              border: `1px solid ${borderEmailColor}`,
              height: "60px",
              fontSize: "16px",
              paddingLeft: "15px",
            }}
          />
          {showEmailError && (
            <ErrorMsg> 올바른 형식의 이메일을 입력해주세요 </ErrorMsg>
          )}
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="비밀번호"
          style={{
            color: "#363636",
            fontSize: "15px",
            fontWeight: "100",
          }}
        >
          <Form.Control
            type="password"
            placeholder="Password"
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              fontFamily: "netflixLight",
              border: `1px solid ${borderPwColor}`,
              height: "60px",
              fontSize: "16px",
              paddingLeft: "15px",
            }}
            value={password}
            onChange={passwordChange}
            onFocus={passwordFocus}
            onBlur={passwordBlur}
          />
          {showPasswordError && (
            <ErrorMsg>비빌번호는 여섯글자 이상이여야 합니다</ErrorMsg>
          )}
        </FloatingLabel>
        <p />
        <FloatingLabel
          controlId="floatingInput"
          label="닉네임"
          className="mb-3"
          style={{
            color: "#363636",
            fontWeight: "100",
            fontSize: "15px",
          }}
        >
          <Form.Control
            type="nickname"
            placeholder="닉네임"
            value={nickname}
            onChange={nicknameChange}
            onFocus={nicknameFocus}
            onBlur={nciknameBlur}
            style={{
              backgroundColor: "#ffffff",
              color: "black",
              fontFamily: "netflixLight",
              border: `1px solid ${borderNicknameColor}`,
              height: "60px",
              fontSize: "16px",
              paddingLeft: "15px",
            }}
          />
          {showNicknameError && (
            <ErrorMsg>
              닉네임은 두 글자 이상, 여덟 글자 이하여야 합니다
            </ErrorMsg>
          )}
        </FloatingLabel>
        <Checkbox>
          <Check
            type="checkbox"
            id="check1"
            checked={checkbox}
            onChange={checkErrorRemove}
          />
          <div>
            예, 저는{" "}
            <Spantext
              onClick={() => {
                window.location.href = "https://help.netflix.com/legal/privacy";
              }}
            >
              개인정보 처리방침
            </Spantext>
            에 따른 개인정보 수집 및 활용에 동의합니다.
          </div>
        </Checkbox>
        {checkboxError && (
          <ErrorMsg
            style={{
              marginLeft: "40px",
            }}
          >
            먼저 이용약관에 동의하셔야 합니다.
          </ErrorMsg>
        )}
        <Checkbox>
          <Check type="checkbox" id="check2" />
          예, 저에게 넷플릭스 특별 할인 알림 이메일을 보내주십시오. (선택사항)
        </Checkbox>
        <SignupFormButton type="submit" onClick={regButton}>
          회원가입 완료
        </SignupFormButton>
      </SigninBody>
    </Signupcontainer>
  );
};
const Signupcontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SigninBody = styled.div`
  background-color: transparent;
  margin: 0 auto -236px;
  max-width: 450px;
  min-height: 100vh;
  &:before {
    content: "";
    display: block;
    height: 150px;
  }
  &:after {
    content: "";
    display: block;
    height: 236px;
  }
`;

const Signuptitle = styled.div`
  color: #363636;
  font-size: 36px;
  font-family: "netflixLight";
  margin-bottom: 20px;
`;

const Signupcontent = styled.div`
  color: #363636;
  font-size: 18px;
  font-family: "netflixLight";
  margin-bottom: 20px;
`;

const Checkbox = styled.div`
  margin-top: 10px;
  box-sizing: border-box;
  font-size: 16px;
  max-width: 500px;
  min-height: 32px;
  position: relative;
  gap: 10px;
  display: flex;
`;

const Check = styled.input.attrs({ type: "checkbox" })`
  width: 40px;
  height: 40px;
`;

const SignupFormButton = styled.button`
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  margin: 24px 0 12px;
  max-width: 100%;
  width: 100%;
  padding: 20px;
  background: #e50914;
  color: white;
  font-family: "netflixBold";
  border: none;
`;

const ErrorMsg = styled.p`
  color: #b92d2b;
  padding-top: 5px;
  font-size: 13px;
`;

const Spantext = styled.span`
  color: #0071eb;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export default Signup;
