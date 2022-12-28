import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Label } from "./Detail";
import { PlayIcon } from "./Detail";

import { __getContentsEpisode } from "../../redux/modules/ContentsSlice";

const EpisodeList = ({ id }) => {
  const detail = useSelector((store) => store.contents.detail.data);
  const seasons = useSelector((store) => store.contents.episode.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      __getContentsEpisode({
        contentsId: id,
        season: 1,
      })
    );
  }, []);

  const episode = seasons?.map((season) => {
    return (
      <div key={season?.episodeId}>
        <Episode key={season?.episodeId}>
          <EpisodeNum>{season?.episodeId}</EpisodeNum>
          <EpisodeVideo>
            <img
              src="https://occ-0-3681-993.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQU4hw8fUOGS7RAD39LQdxNOMzS4u65i1McIIGYHF6QCgTIp43CbZTPUj5ZMLCei4DWAF6vlSiAi_Ol5q5HCT1ciA0Fkvdpb6HW8ZLTsPZQyE10ICOi2OanK.jpg?r=952"
              alt="수요일의 아이는 울적하다"
            ></img>
            <PlayIcon>
              <svg
                style={{ width: "38px", height: "38px" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                  fill="currentColor"
                ></path>
              </svg>
            </PlayIcon>
          </EpisodeVideo>
          <DetailEpisode>
            <WrapCardTop>
              <CardTitle>{season?.title}</CardTitle>
              <CardDuration>{season?.runtime}분</CardDuration>
            </WrapCardTop>
            <CardContent>{season?.summary}</CardContent>
          </DetailEpisode>
        </Episode>
      </div>
    );
  });

  return (
    <>
      {seasons?.length === 0 ? null : (
        <EpisodeInfo>
          <Label>회차</Label>
          <VideoTitle>{detail?.title}</VideoTitle>
        </EpisodeInfo>
      )}

      <WrapEpisodeList>{episode}</WrapEpisodeList>
    </>
  );
};

const WrapEpisodeList = styled.div`
  padding-top: 16px;
`;

const EpisodeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: #d2d2d2;
`;

const VideoTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Episode = styled.div`
  width: 100%;
  min-height: 8rem;
  padding: 16px;
  display: flex;
  align-items: center;
  border-top: 1px solid #404040;
  border-bottom: 1px solid #404040;
  cursor: pointer;
  svg {
    width: 5rem;
    height: 5rem;
    opacity: 0;
  }
  :hover {
    svg {
      opacity: 1;
    }
  }
`;

const EpisodeNum = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  flex: 0 0 7%;
  color: #d2d2d2;
`;

const EpisodeVideo = styled.div`
  width: 230px;
  height: 130px;
  background-color: #141414;
  position: relative;
  img {
    display: block;
    max-width: 100%;
    box-sizing: inherit;
  }
`;

const DetailEpisode = styled.div`
  flex: 0 0 68%;
  color: #d2d2d2;
`;

const WrapCardTop = styled.div`
  padding: 1em 1em 0.5em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: white;
  margin-left: 5px;
  margin-bottom: 2px;
`;

const CardDuration = styled.div`
  padding-left: 10px;
  font-size: 16px;
  color: #fff;
`;

const CardContent = styled.div`
  padding: 0px 14px 14px;
  color: #d2d2d2;
  font-size: 14px;
  line-height: 20px;
`;

export default EpisodeList;
