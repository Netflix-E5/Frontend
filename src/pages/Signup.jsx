import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { __postSignUp } from "../redux/modules/UserSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checkbox, setCheckbox] = useState(false);
  const [showEmailError, setEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [borderEmailColor, setBorderEmailColor] = useState("black");
  const [borderPwColor, setBorderPwColor] = useState("black");

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
  const passWordFocus = () => {
    setIsFocused(true);
  };
  const passwordBlur = () => {
    setIsFocused(false);
    if (password.length < 6) {
      setShowPasswordError(true);
      setBorderPwColor("#b92d2b");
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
      !checkboxError
    ) {
      dispatch(__postSignUp({ email: email, password: password }));
      alert("회원가입 완료!");
      navigate("/signin");
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
            }}
            value={password}
            onChange={passwordChange}
            onFocus={passWordFocus}
            onBlur={passwordBlur}
          ></Form.Control>
          {showPasswordError && (
            <ErrorMsg>비빌번호는 6글자 이상이여야 합니다</ErrorMsg>
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
            예, 저는
            <Spantext>
              <a href="https://help.netflix.com/legal/privacy">
                개인정보 처리방침
              </a>
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
const SignupHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  padding-left: 50px;
`;
const Logo = styled.img`
  width: 220px;
  height: auto;
`;
const Signuptag = styled.span`
  color: #555555;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 100;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
const Spantext = styled.span`
  color: #0086f3;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
export default Signup;
