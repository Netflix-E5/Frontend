import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/common/Logo";
import TextBtn from "../components/common/TextBtn";

function Header() {
  const { pathname } = useLocation();
  const showMenu =
    pathname === "/signin" || pathname === "/signup" ? false : true;

  const navigation = [
    { name: "홈", link: "/" },
    { name: "시리즈", link: "/genre/83" },
    { name: "영화", link: "/genre/34399" },
    { name: "NEW! 요즘 대세 콘텐츠", link: "/latest" },
    { name: "내가 찜한 콘텐츠", link: "/my-page" },
    { name: "언어별로 찾아보기", link: "/original-audio" },
  ];

  const userMenu = [
    { icon: "", name: "프로필 관리" },
    { icon: "", name: "프로필 이전" },
    { icon: "", name: "계정" },
    { icon: "", name: "고객센터" },
    { icon: "", name: "넷플릭스에서 로그아웃" },
  ];

  const navigate = useNavigate();
  return (
    <Wrapper isMenuStyle={showMenu}>
      <ContentWrapper isMenuStyle={showMenu}>
        {pathname === "/signin" || pathname === "/signup" ? (
          <>
            <Logo isLogin={false} width="167px" height="45px" />
            {pathname === "/signup" ? (
              <TextBtn
                text="로그인"
                size="small"
                type="light"
                onClick={() => navigate("/login")}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <Content>
              <Link to="/">
                <Logo isLogin={true} />
              </Link>
              <MenuWrapper>
                {navigation.map((v) => (
                  <Menu key={v.name}>
                    <Link to={v.link}>{v.name}</Link>
                  </Menu>
                ))}
              </MenuWrapper>
            </Content>
            <Content>
              <Profile>
                <ProfileIcon
                  src="http://occ-0-1360-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                  alt=""
                />
                <Caret className="profile_caret" />
                <ProfileToggleWrapper className="profile_menu">
                  <ProfileToggle>
                    <ProfileMenuCaret />
                    <ProfileMenuWrapper>
                      {userMenu.map((v) => (
                        <ProfileMenu key={v.name}>{v.name}</ProfileMenu>
                      ))}
                    </ProfileMenuWrapper>
                  </ProfileToggle>
                </ProfileToggleWrapper>
              </Profile>
            </Content>
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background: ${(props) =>
    props.isMenuStyle
      ? `linear-gradient(180deg,rgba(0,0,0,0.7) 10%, transparent)`
      : `transparent`};
  font-size: ${(props) => (props.isMenuStyle ? "10px" : "16px !important")};
`;

const ContentWrapper = styled.div`
  padding: ${(props) => (props.isMenuStyle ? "0 60px" : "")};
  margin: ${(props) => (props.isMenuStyle ? "" : "0 3%")};
  height: ${(props) => (props.isMenuStyle ? "68px" : "90px")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  font-size: 1.2rem;
  ::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Menu = styled.div`
  float: left;
  height: 100%;
  color: white;
  transition: color 0.4s;
  :hover {
    cursor: pointer;
    color: #e5e5e5;
  }
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ProfileIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }

  :hover ~ .profile_menu {
    display: block;
  }

  :hover ~ .profile_caret {
    transform: rotateZ(180deg);
  }
`;

const Caret = styled.span`
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
  :hover {
    cursor: pointer;
    transform: rotateZ(180deg);
  }

  :hover ~ .profile_menu {
    display: block;
  }
`;

const ProfileToggleWrapper = styled.div`
  position: absolute;
  display: none;
  top: 32px;
  right: 0px;
  padding: 20px 0;
  transition: display 150ms;
  :hover {
    display: block;
  }
`;

const ProfileToggle = styled.div`
  position: relative;
`;

const ProfileMenuWrapper = styled.div`
  padding: 20px;
  width: 200px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
`;

const ProfileMenuCaret = styled.span`
  position: absolute;
  top: -14px;
  right: 30px;
  border-color: transparent transparent #fff;
  border-style: solid;
  border-width: 7px 7px 7px;
`;

const ProfileMenu = styled.div`
  padding: 10px;
  :hover {
    cursor: pointer;
  }
`;

export default Header;
