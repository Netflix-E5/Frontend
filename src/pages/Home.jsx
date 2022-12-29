import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import IconBtn from "../components/common/IconBtn";
import RatingIcon from "../components/common/RatingIcon";
import TextBtn from "../components/common/TextBtn";
import ContentsSlider from "../components/contents/ContentsSlider";
import Detail from "../components/contents/Detail";

import {
  __getContentsByViewAsc,
  __getContentsByGenre,
  __getContentsByRating,
  updateMute,
} from "../redux/modules/ContentsSlice";

function Home() {
  const dispatch = useDispatch();
  const topViewedList = useSelector((store) => store.contents.topViewed);
  const genreList = useSelector((store) => store.contents.sortedByGenreList);
  const ratingList = useSelector((store) => store.contents.sortedByRatingList);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin()) navigate("/signin");
    dispatch(__getContentsByViewAsc());
    dispatch(__getContentsByGenre());
    dispatch(__getContentsByRating());
  }, []);

  const isLogin = () => {
    return localStorage.getItem("access-token");
  };

  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const handleVideoEnd = (v) => {
    setIsVideoEnded(v);
  };

  const isMuted = useSelector((state) => state.contents.isMuted);
  const handleIsMuted = () => {
    dispatch(updateMute());
  };

  const videoRef = useRef();
  const handleVideoReplay = () => {
    videoRef.current.play();
  };

  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleContentsPlay = () => {
    // TODO: add contents play page and navigate to contents play page
    console.log("handleContentsPlay");
  };

  return (
    <Wrapper>
      <MainContents>
        <MainImg src={require("../assets/img/test.jpg")} show={isVideoEnded} />
        <MainVideo
          ref={videoRef}
          autoPlay={true}
          muted={isMuted}
          src={require("../assets/videos/test.mp4")}
          onPlay={() => handleVideoEnd(false)}
          onEnded={() => handleVideoEnd(true)}
        />
        <InfoLayer>
          <Title
            src="https://lumiere-a.akamaihd.net/v1/images/hb_avatar_wayofthewater_logo_22827_88e2c4c8.png?region=0,0,900,258"
            alt=""
          />
          <Summary>{`<아바타: 물의 길>은 판도라 행성에서
      '제이크 설리'와 '네이티리'가 이룬 가족이 겪게 되는 무자비한 위협과
      살아남기 위해 떠나야 하는 긴 여정과 전투,
      그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.`}</Summary>
        </InfoLayer>
        <BtnLayer>
          <LeftBtnWrapper>
            <div style={{ width: "40%" }}>
              <TextBtn
                icon={
                  <svg
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000000"
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                    />
                  </svg>
                }
                text="재생"
                size="medium"
                type="light"
                handler={handleContentsPlay}
              />
            </div>
            <div style={{ width: "50%" }}>
              <TextBtn
                icon={
                  <svg
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FFFFFE"
                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    />
                  </svg>
                }
                text="상세정보"
                size="medium"
                type="transparent"
                handler={() => setShowDetailModal(true)}
              />
            </div>
            <Detail
              show={showDetailModal}
              closeHandler={() => setShowDetailModal(false)}
              id={topViewedList[0].contentsId}
            />
          </LeftBtnWrapper>
          <RightBtnWrapper>
            <IconBtnWrapper
              onClick={isVideoEnded ? handleVideoReplay : handleIsMuted}
            >
              {isVideoEnded ? (
                <IconBtn type="replay" />
              ) : (
                <IconBtn type={isMuted ? "soundOn" : "soundOff"} />
              )}
            </IconBtnWrapper>
            <RatingIconWrapper>
              <RatingIcon rating={15} />
            </RatingIconWrapper>
          </RightBtnWrapper>
        </BtnLayer>
        <Bg show={!isVideoEnded} />
        <MainContentsListWrapper>
          <ContentsSlider
            title="현재 가장 인기 많은 콘텐츠"
            contentsList={topViewedList}
          />
        </MainContentsListWrapper>
      </MainContents>
      <ContentsListWrapper>
        {genreList.map((v) => {
          if (v.movies.length === 0) return <></>;
          return (
            <ContentsSlider
              key={v.genre}
              title={`${v.genre}`}
              contentsList={v.movies}
            />
          );
        })}
      </ContentsListWrapper>
      <ContentsListWrapper>
        {ratingList.map((v) => {
          if (v.movies.length === 0) return <></>;
          return (
            <ContentsSlider
              key={v.rating}
              title={
                v.rating === "ALL"
                  ? `전체 관람가 콘텐츠`
                  : `${v.rating}세 연령등급 제한 콘텐츠`
              }
              contentsList={v.movies}
            />
          );
        })}
      </ContentsListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const MainContents = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const MainImg = styled.img`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100vw;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 150ms;
`;

const MainVideo = styled.video`
  position: absolute;
  top: -15%;
  width: 100vw;
`;

const Bg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(
    180deg,
    transparent 1%,
    ${(props) => props.theme.mainBgColor}
  ); ;
`;

const InfoLayer = styled.div`
  position: absolute;
  top: 300px;
  left: 60px;
  z-index: 3;
  width: 30%;
`;

const Title = styled.img`
  width: 100%;
  height: auto;
`;

const Summary = styled.div`
  padding-top: 20px;
  font-size: 20px;
  color: #fffffe;
  word-break: keep-all;
`;

const BtnLayer = styled.div`
  position: absolute;
  padding-left: 60px;
  width: 100%;
  top: 50%;
  right: 0;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const LeftBtnWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const RightBtnWrapper = styled(LeftBtnWrapper)`
  width: 300px;
`;

const IconBtnWrapper = styled.div`
  width: 4rem;
  height: 4rem;
`;

const RatingIconWrapper = styled(IconBtnWrapper)``;

const MainContentsListWrapper = styled.div`
  position: absolute;
  padding-top: 20px;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 3;
  background: linear-gradient(
    180deg,
    transparent 1%,
    ${(props) => props.theme.mainBgColor}
  );
`;

const ContentsListWrapper = styled(MainContentsListWrapper)`
  position: relative;
  background-color: ${(props) => props.theme.mainBgColor};
`;

export default Home;
