import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReactPlayer from "react-player";

import IconBtn from "../common/IconBtn";
import RatingIcon from "../common/RatingIcon";
import ToggleMsg from "../common/ToggleMsg";

import defaultImg from "../../assets/img/test.jpg";

import {
  updateMute,
  __postCountViews,
} from "../../redux/modules/ContentsSlice";
import Detail from "./Detail";

function PreviewModal({ contents, show }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const handleMouseOver = (state) => {
    setIsMouseOver(state);
  };

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(true);
  const handleVideoLoad = (state) => {
    setIsVideoLoaded(state);
  };
  const handleVideoEnd = (state) => {
    setIsVideoEnded(state);
  };

  const isMuted = useSelector((state) => state.contents.isMuted);
  const dispatch = useDispatch();
  const handleIsMuted = () => {
    dispatch(updateMute());
  };

  const handleContentsPlay = () => {
    // TODO: add contents play page and navigate to contents play page
    console.log("handleContentsPlay");
  };

  const [isPicked, setIsPicked] = useState(false);
  const handlePick = () => {
    setIsPicked(!isPicked);
  };

  const [showDetailToggleMsg, setShowDetailToggleMsg] = useState(false);
  const [showPickToggleMsg, setShowPickToggleMsg] = useState(false);

  const [showDetailModal, setShowDetailModal] = useState(false);
  const handleShowDetail = () => {
    setShowDetailModal(!showDetailModal);
  };
  useEffect(() => {
    setIsMouseOver(false);
  }, [showDetailModal]);

  const addCountViews = (e) => {
    e.preventDefault();
    dispatch(__postCountViews(contents.contentsId));
  };

  return (
    <Wrapper
      show={show || isMouseOver}
      onMouseOver={() => handleMouseOver(true)}
      onMouseLeave={() => handleMouseOver(false)}
    >
      <ContentWrapper>
        <ThumbnailWrapper>
          <Thumbnail
            src={contents.thumbnailUrl}
            onError={(e) => (e.target.src = defaultImg)}
            show={!isVideoLoaded || isVideoEnded}
          />
          <Title>{contents.title}</Title>
          <ReactPlayer
            style={{
              position: "absolute",
              left: "-15%",
              transition: "display 150ms",
            }}
            id="video"
            height="100%"
            url={contents.trailerUrl}
            muted={isMuted}
            playing={isVideoLoaded && isMouseOver}
            loop={true}
            controls={false}
            onReady={() => handleVideoLoad(true)}
            onPlay={() => handleVideoEnd(false)}
            onEnded={() => handleVideoEnd(true)}
            fallback={
              <Thumbnail
                src={contents.thumbnailUrl}
                onError={(e) => (e.target.src = defaultImg)}
                show={false}
              />
            }
            config={{
              youtube: {
                playerVars: {
                  origin: process.env.REACT_APP_URL,
                  fs: 0,
                  modestbranding: 1,
                },
              },
            }}
          />
          <VideoIconBtnWrapper
            show={isMouseOver && !isVideoEnded}
            onClick={handleIsMuted}
          >
            <IconBtn type={isMuted ? "soundOff" : "soundOn"} />
          </VideoIconBtnWrapper>
        </ThumbnailWrapper>
        <Body id="info">
          <Box>
            <ToggleMsgPositionWrapper>
              <ToggleMsgWrapper>
                <ToggleMsg
                  text={
                    isPicked
                      ? "내가 찜한 콘텐츠에서 삭제"
                      : "내가 찜한 콘텐츠에 추가"
                  }
                  position={-20}
                  show={showPickToggleMsg}
                />
                <ToggleMsg
                  text="회차 및 상세정보"
                  position={345}
                  show={showDetailToggleMsg}
                />
              </ToggleMsgWrapper>
            </ToggleMsgPositionWrapper>
            <BtnWrapper>
              <SubBtnWrapper>
                <IconBtnWrapper onClick={addCountViews}>
                  <IconBtn
                    type="play"
                    theme="light"
                    onClick={handleContentsPlay}
                  />
                </IconBtnWrapper>
                <IconBtnWrapper
                  onClick={handlePick}
                  onMouseOver={() => setShowPickToggleMsg(true)}
                  onMouseLeave={() => setShowPickToggleMsg(false)}
                >
                  <IconBtn type={isPicked ? "delPick" : "addPick"} />
                </IconBtnWrapper>
              </SubBtnWrapper>
              <IconBtnWrapper
                onMouseOver={() => setShowDetailToggleMsg(true)}
                onMouseLeave={() => setShowDetailToggleMsg(false)}
                onClick={handleShowDetail}
              >
                <IconBtn type="detail" />
              </IconBtnWrapper>
            </BtnWrapper>
            <InfoWrapper>
              <InfoBox>
                <RatingIconWrapper>
                  <RatingIcon rating={contents.rating} />
                </RatingIconWrapper>
                <p>
                  {!contents.episodeCount || contents.episodeCount === 0
                    ? `영화`
                    : `에피소드 ${contents.episodeCount} 개`}
                </p>
              </InfoBox>
              <div>{contents.genre}</div>
            </InfoWrapper>
          </Box>
        </Body>
      </ContentWrapper>
      <Detail
        show={showDetailModal}
        closeHandler={() => setShowDetailModal(false)}
        id={contents.contentsId}
        ranking={!contents.ranking ? 0 : contents.ranking}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: ${(props) => (props.show ? "" : "none")};
`;

const ContentWrapper = styled.div`
  width: 100%;
  border-radius: 0.2vw;
  transition: all 0.5s;
  z-index: 3;

  :hover {
    cursor: pointer;
    position: absolute;
    transform: translate3d(-15%, -40%, 10px);
    width: 130%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  :hover #video {
    display: block;
  }

  :hover #info {
    display: block;
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  border-top-left-radius: 0.3vw;
  border-top-right-radius: 0.3vw;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  display: ${(props) => (props.show ? "" : "none")};
`;

const VideoIconBtnWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;
  width: 4rem;
  height: 4rem;
  display: ${(props) => (props.show ? "" : "none")};
  transition: display 150ms;
`;

const Title = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

const Body = styled.div`
  display: none;
  width: 100%;
  background-color: ${(props) => props.theme.mainBgColor};
  transition: display 150ms;
  :hover {
    display: block;
  }
`;

const Box = styled.div`
  position: relative;
  padding: 30px;
`;

const ToggleMsgPositionWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  width: 130%;
`;

const ToggleMsgWrapper = styled.div`
  position: relative;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SubBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const IconBtnWrapper = styled.div`
  width: 4rem;
  height: 4rem;
`;

const InfoWrapper = styled.div`
  padding-top: 20px;
  font-size: 16px;
  color: white;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const RatingIconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
`;

export default PreviewModal;
