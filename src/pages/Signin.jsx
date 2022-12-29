import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { __postSignIn } from "../redux/modules/UserSlice";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showEmailError, setEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/);

  const emailChange = (event) => {
    setEmail(event.target.value);
    if (!emailRegex.test(event.target.value)) {
      if (!isFocused) {
        setEmailError(true);
      }
    } else {
      setEmailError(false);
    }
  };

  const emailFocus = () => {
    setIsFocused(true);
  };

  const emailBlur = (event) => {
    setIsFocused(false);
    if (!emailRegex.test(event.target.value)) {
      setEmailError(true);
    }
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6) {
      if (!isFocused) {
        setShowPasswordError(true);
      }
    } else {
      setShowPasswordError(false);
    }
  };

  const passWordFocus = () => {
    setIsFocused(true);
  };

  const passwordBlur = () => {
    setIsFocused(false);
    if (password.length < 6) {
      setShowPasswordError(true);
    }
  };

  const signupBtn = () => {
    navigate("/signup");
  };

  const signinButton = (e) => {
    e.preventDefault();
    if (!showEmailError && !showPasswordError) {
      dispatch(__postSignIn({ email: email, password: password }));
    }
  };
  return (
    <>
      <SigninBackgroundWrap>
        <SigninBody>
          <SigninWrap>
            <SigninformMain>
              <SigninPageTitle>로그인</SigninPageTitle>
              <SigninFormContainer>
                <FloatingLabel
                  controlId="floatingInput"
                  label="이메일주소를 입력해주세요"
                  className="mb-3"
                  style={{
                    color: "#cfc9c9",
                    fontWeight: "200",
                    fontSize: "14px",
                  }}
                >
                  <Form.Control
                    type="email"
                    placeholder="이메일주소"
                    style={{
                      backgroundColor: "#333",
                      color: "white",
                      fontFamily: "netflixLight",
                      border: "none",
                      borderRadius: "2px",
                      height: "50px",
                      fontSize: "16px",
                      paddingLeft: "15px",
                    }}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
                    value={email}
                    onChange={emailChange}
                    onFocus={emailFocus}
                    onBlur={emailBlur}
                  />
                  {showEmailError && (
                    <ErrorMsg>정확한 이메일을 입력해주세요</ErrorMsg>
                  )}
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="비밀번호"
                  style={{
                    color: "#cfc9c9",
                    fontSize: "13px",
                    fontWeight: "100",
                  }}
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{
                      backgroundColor: "#333",
                      color: "white",
                      fontFamily: "netflixLight",
                      border: "none",
                      borderRadius: "2px",
                      height: "50px",
                      fontSize: "16px",
                      paddingLeft: "15px",
                    }}
                    value={password}
                    onChange={passwordChange}
                    onFocus={passWordFocus}
                    onBlur={passwordBlur}
                  ></Form.Control>
                  {showPasswordError && (
                    <ErrorMsg>
                      비밀번호는 8글자 이상의 특수문자가 포함되어야 합니다.
                    </ErrorMsg>
                  )}
                </FloatingLabel>
                <SigninFormButton onClick={signinButton}>
                  로그인
                </SigninFormButton>
              </SigninFormContainer>
              <InduceMemberShip>
                Netfliix 회원이 아닌가요? <span> </span>
                <Singupnow onClick={signupBtn}>지금가입하세요</Singupnow>
              </InduceMemberShip>
              <Robotcheck>
                이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이
                아님을 확인 못합니다.
              </Robotcheck>
              <RecaptchaButton>
                <a href="https://policies.google.com/privacy">자세히알아보기</a>
              </RecaptchaButton>
            </SigninformMain>
          </SigninWrap>
        </SigninBody>
      </SigninBackgroundWrap>
    </>
  );
};

const SigninBackgroundWrap = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/730cfed9-99b6-475f-8d64-2917128b6624/KR-ko-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-size: cover;
  background-attachment: fixed;
  display: block;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
  min-height: 100%;
  min-width: 80%;
  font-weight: bolder;
`;

const SigninBody = styled.div`
  background-color: transparent;
  margin: 0 auto -236px;
  max-width: 450px;
  min-height: 100vh;
  &:before {
    content: "";
    display: block;
    height: 91px;
  }
  &:after {
    content: "";
    display: block;
    height: 236px;
  }
`;

const SigninWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 515px;
  padding: 20px 0 30px;
  width: 100%;
  min-height: 660px;
  margin-bottom: 90px;
  padding: 60px 68px 40px;
`;

const SigninformMain = styled.div`
  flex-grow: 1;
`;

const SigninPageTitle = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 28px;
`;

const SigninFormContainer = styled.form`
  margin-bottom: 0;
`;

const SigninFormButton = styled.button`
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 12px;
  max-width: 100%;
  width: 100%;
  padding: 13px;
  background: #e50914;
  color: white;
  font-family: "netflixBold";
  border: 1px solid black;
`;

const InduceMemberShip = styled.div`
  color: #737373;
  font-size: 16px;
  font-weight: 400;
  margin-top: 16px;
`;

const Singupnow = styled.span`
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Robotcheck = styled.span`
  color: #737373;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 200;
`;

const RecaptchaButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: 12px;
  padding: 0;
`;

const ErrorMsg = styled.div`
  border-top: 2px solid;
  border-color: #e87c03;
  border-radius: 1px;
  font-size: 12px;
  padding-left: 10px;
  color: #e87c03;
`;

export default Signin;
