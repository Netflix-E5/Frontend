import styled from "styled-components";
import netflixlogo from "../assets/img/netflixlogo.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Signin = () => {
  return (
    <>
      <SigninBackgroundWrap>
        <SigninHeader>
          <Logo src={netflixlogo} />
        </SigninHeader>
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
                    fontWeight: "100",
                    fontSize: "15px",
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
                    }}
                  />
                </FloatingLabel>
                <PasswordInputbox></PasswordInputbox>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="비밀번호"
                  style={{
                    color: "#cfc9c9",
                    fontSize: "15px",
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
                      paddingRight: "50px",
                    }}
                  ></Form.Control>
                </FloatingLabel>
                <SigninFormButton> 로그인</SigninFormButton>
              </SigninFormContainer>
              <InduceMemberShip>
                Netfliix 회원이 아닌가요? <Singupnow>지금가입하세요</Singupnow>
              </InduceMemberShip>
              <Robotcheck>
                이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이
                아님을 확인못합니다.
              </Robotcheck>
              <RecaptchaButton>자세히알아보기</RecaptchaButton>
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
const SigninHeader = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);
  border-bottom: transparent;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 90px;
  font-style: normal;
`;
const Logo = styled.img`
  width: 220px;
  height: auto;
  margin-left: 1.7%;
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
  color: #fff;
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
const PasswordInputbox = styled.div`
  display: flex;
`;

export default Signin;
