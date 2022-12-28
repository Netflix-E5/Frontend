import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

import IconBtn from "../common/IconBtn";
import RankingIcon from "../common/RankingIcon";
import RatingIcon from "../common/RatingIcon";
import EpisodeList from "./EpisodeList";
import SummaryContents from "./SummaryContents";
import TrailerContents from "./TrailerContents";

import { __getMoviesDetail } from "../../redux/modules/MoviesSlice";

const Detail = ({ show, closeHandler, id, ranking = 0 }) => {
  const [mute, setMute] = useState(false);
  const detail = useSelector((store) => store?.movies?.detail?.data);
  const episode = useSelector((store) => store?.movies?.episode?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMoviesDetail(id));
  }, []);

  const SortRatingText = () => {
    if (detail?.rating === "18") {
      return "18세이상관람가";
    } else if (detail?.rating === "15") {
      return "15세이상관람가";
    } else if (detail?.rating === "12") {
      return "12세이상관람가";
    } else {
      return "전체관람가";
    }
  };

  return (
    <>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          border: 0,
          borderRadius: "6px",
          boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
        }}
      >
        <ModalBox>
          <Modal.Body
            style={{
              width: "100%",
              height: "680px",
              backgroundColor: "#141414",
              padding: 0,
              overflow: "hidden",
            }}
          >
            <VideoSection>
              <FirstGradient />
              <SecondGradient />
              <ThirdGradient />
              <ThirdGradient />
              <ReactPlayer
                className="react-player"
                url={
                  detail?.trailerUrl.length === 0
                    ? "https://www.youtube.com/watch?v=NakTu_VZxJ0"
                    : detail?.trailerUrl
                }
                width="100%"
                height="723px"
                muted={mute}
                playing={true}
                loop={true}
              />
              <div
                style={{
                  alignItems: "center",
                  position: "absolute",
                  bottom: "15%",
                  left: "5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PlayBtn>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span
                      style={{
                        marginLeft: "1rem",
                        fontSize: "16px",
                      }}
                    >
                      재생
                    </span>
                  </PlayBtn>
                  <div
                    style={{
                      marginLeft: "0.8rem",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    <IconBtn type={"addPick"} />
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "115px",
                  right: "50px",
                  width: "30px",
                  height: "30px",
                }}
              >
                <IconBtn
                  type={mute === false ? "soundOn" : "soundOff"}
                  handler={() => setMute(!mute)}
                />
              </div>
              <CloseButton onClick={closeHandler}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-uia="previewModal-closebtn"
                  role="button"
                  aria-label="close"
                  tabIndex="0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                    fill="#d2d2d2"
                    style={{ boxSizing: "inherit" }}
                  ></path>
                </svg>
              </CloseButton>
            </VideoSection>
          </Modal.Body>
          <Modal.Body
            style={{
              backgroundColor: "#181818",
              color: "white",
              padding: "10px 48px 48px 48px",
            }}
          >
            <Details>
              <DetailsLeft>
                <VideoData>
                  <div>
                    <TopLine>
                      <span style={{ marginRight: "10px" }}>
                        {detail?.release}
                      </span>
                      <div style={{ width: "30px", height: "30px" }}>
                        <RatingIcon rating={detail?.rating} />
                      </div>
                      <span style={{ marginLeft: "10px" }}>
                        {episode?.length === 0
                          ? null
                          : `에피소드 ${episode?.length}개`}
                      </span>
                    </TopLine>

                    {ranking === 0 ? null : (
                      <>
                        <RankingIcon />
                        <span style={{ marginLeft: "0.8rem" }}>
                          오늘의 {episode?.length === 0 ? "영화" : "시리즈"}{" "}
                          순위 {ranking}위
                        </span>
                      </>
                    )}
                  </div>
                </VideoData>
                <VideoDesc>{detail?.summary}</VideoDesc>
              </DetailsLeft>
              <DetailsRight>
                <div>
                  <DetailLabel>출연:</DetailLabel>
                  {detail?.actor}
                </div>
                <div>
                  <DetailLabel>장르:</DetailLabel>
                  {detail?.genre}
                </div>
              </DetailsRight>
            </Details>
            <EpisodeList />
            <SummaryContents></SummaryContents>
            <TrailerContents></TrailerContents>
            <Label>{detail?.title} 상세 정보</Label>
            <WrapDetailInfo>
              <div>
                <DetailLabel>크리에이터:</DetailLabel>
                {detail?.director}
              </div>
              <div>
                <DetailLabel>출연:</DetailLabel>
                {detail?.actor}
              </div>
              <div>
                <DetailLabel>장르:</DetailLabel>
                {detail?.genre}
              </div>
              <div style={{ display: "flex" }}>
                <DetailLabel style={{ marginRight: "10px" }}>
                  관람등급:
                </DetailLabel>
                <div style={{ width: "30px", height: "30px" }}>
                  <RatingIcon rating={detail?.rating} />
                </div>
                <span style={{ marginLeft: "10px" }}>
                  <SortRatingText />
                </span>
              </div>
            </WrapDetailInfo>
          </Modal.Body>
        </ModalBox>
      </Modal>
    </>
  );
};

const ModalBox = styled.div`
  position: absolute;
  top: -600px;
  left: -240px;
  width: 1280px;
  border: 1px solid black;
  margin: auto;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  font-family: ${(props) => props.theme.Medium};
`;

const FirstGradient = styled.div`
  background: linear-gradient(0deg, #181818, transparent 50%);
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
`;

const SecondGradient = styled.div`
  background: linear-gradient(0deg, #181818, transparent 20%);
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
`;

const ThirdGradient = styled.div`
  background: linear-gradient(0deg, #181818, transparent 10%);
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
`;

const VideoSection = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  border-radius: 6px 6px 0 0;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  border: 0;
  box-sizing: inherit;
  background-color: #181818;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  svg {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;
  }
`;

const PlayBtn = styled.button`
  background-color: white;
  color: black;
  display: flex;
  padding-left: 1.4rem;
  padding-right: 1.6rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 4px;
  border: 0;
  :hover {
    background-color: #e4e4e4;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
`;

const DetailsLeft = styled.div`
  width: 67%;
`;

const VideoData = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
`;
const TopLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  margin: 0.8em 0;
`;

const VideoDesc = styled.div`
  font-size: 14px;
  line-height: 24px;
  width: 95%;
`;

const DetailsRight = styled.div`
  width: 33%;
  font-size: 14px;
  line-height: 20px;
  margin: 0.5em 0.5em 0.5em 0;
  word-break: break-word;
`;

const DetailLabel = styled.span`
  color: #777;
`;

export const Label = styled.div`
  margin-top: 48px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  font-family: ${(props) => props.theme.bold};
`;

export const PlayIcon = styled.div`
  cursor: pointer;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  position: absolute;
  justify-content: center;
  background-image: linear-gradient(
    195deg,
    hsla(0, 0%, 9%, 0.7),
    hsla(0, 0%, 9%, 0.5) 10%,
    transparent 25%
  );
  svg {
    background-color: rgba(30, 30, 20, 0.5);
    border: 1px solid #fff;
    border-radius: 2rem;
    height: 3rem;
    padding: 0.5em;
    transition: opacity 0.2s ease-in;
    width: 3em;
    path {
      box-sizing: inherit;
    }
  }
`;

export const WrapCardImg = styled.div`
  overflow: hidden;
  position: relative;
  box-sizing: inherit;
`;

export const CardImage = styled.div`
  box-sizing: inherit;
  display: block;
  img {
    width: 100%;
    display: block;
    box-sizing: inherit;
    border: 0;
  }
`;

const WrapDetailInfo = styled.div`
  box-sizing: inherit;
  font-size: 14px;
  line-height: 20px;
  margin: 0.5em 0.5em 0.5em 0;
  word-break: break-word;
`;

export default Detail;
