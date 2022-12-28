import React from "react";
import styled from "styled-components";

import IconBtn from "../common/IconBtn";
import RatingIcon from "../common/RatingIcon";

import { Label, PlayIcon, WrapCardImg, CardImage } from "../contents/Detail";

const SummaryContents = () => {
  return (
    <div>
      <Label>함께 시청된 콘텐츠</Label>
      <MoreLikeThisContainer>
        <InnerCard>
          <WrapCardImg>
            <CardImage>
              <img
                src="https://occ-0-3681-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfpa7sZP8vimklmcUvOQDmjWNKfjJGF9ENj-gvmxx0WnYBU8bMD7uH7-Iwmsb457RnbyiIJfpjn0duo2uAnAd7Td7pcbVmCwqpz_pyaXtDJL1D19sOgpkH6ptXmKrhqJvCnY.jpg?r=022"
                alt="사브리나의 오싹한 모험"
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
            </CardImage>
          </WrapCardImg>
          <CardInfo>
            <TopInfo>
              <Release>
                <RatingIcon rating={"18"} />
                <span style={{ marginLeft: "8px" }}>2020</span>
              </Release>
              <Pick>
                <IconBtn type={"addPick"} />
              </Pick>
            </TopInfo>
            <BottomInfo>
              반은 인간, 반은 마녀인 사브리나. 16세 생일을 맞아 결정을 내릴 때가
              온다. 인간 세상에 남을지, 아니면 어둠의 교회에 들어갈지,
              사브리나의 선택은?
            </BottomInfo>
          </CardInfo>
        </InnerCard>
        <InnerCard>
          <WrapCardImg>
            <CardImage>
              <img
                src="https://occ-0-3681-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcE99Ffe0L05Yy0kYxPClZFke9jTRgPh01Poc27ijA-vsuEItiqkXPZwNj2n6tzaL2ASrKlqMRn_aU962qQNuhs0CDjWFU1qxMYE-sLRcvdCmovG3sLDKQtHeRk9azKtr6Je.jpg?r=cc7"
                alt="에놀라 홈즈"
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
            </CardImage>
          </WrapCardImg>
          <CardInfo>
            <TopInfo>
              <Release>
                <RatingIcon rating={"12"} />
                <span style={{ marginLeft: "8px" }}>2020</span>
              </Release>
              <Pick>
                <IconBtn type={"addPick"} />
              </Pick>
            </TopInfo>
            <BottomInfo>
              사라진 엄마를 찾아야 한다! 홈즈 가문답게 탐정 본능 장착하고 런던에
              간 에놀라. 하지만 시작부터 도망자 신세의 귀족 청년과 엮여버렸다.
              그 와중에 오빠 셜록까지 따돌려야 한다니. 미스터리 가득한 이 모험,
              무사히 마칠 수 있을까?
            </BottomInfo>
          </CardInfo>
        </InnerCard>
        <InnerCard>
          <WrapCardImg>
            <CardImage>
              <img
                src="https://occ-0-3681-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRh5z_tKBqFO8MQZLUx_-R4FRiL6NmMy_NCY5dm6fbvddWkZ8nnTFplxYC1R-KXJ_0pq8WaUTCAPThpuB5WRv-FZx1626UUxIPvOKurlvwVZtiS-cB9tCXzpYbjdw90fwChR.jpg?r=8ad"
                alt="에놀라 홈즈 2"
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
            </CardImage>
          </WrapCardImg>
          <CardInfo>
            <TopInfo>
              <Release>
                <RatingIcon rating={"15"} />
                <span style={{ marginLeft: "8px" }}>2022</span>
              </Release>
              <Pick>
                <IconBtn type={"addPick"} />
              </Pick>
            </TopInfo>
            <BottomInfo>
              탐정이 된 후 첫 번째 사건을 수임한 에놀라. 하지만 실종된 소녀의
              미스터리를 풀기 위해서는 친구들의 도움이 필요하다. 어쩌면 오빠
              셜록의 도움까지도.
            </BottomInfo>
          </CardInfo>
        </InnerCard>
        <InnerCard>
          <WrapCardImg>
            <CardImage>
              <img
                src="https://occ-0-3681-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ1pVxBQQbW7h1An43g16u3VY2MIdZ3k7-7z9ZrrHaetvh34GY3NgsKNIsGUQMMgwAMfdt_i8mA9Ti07laIukg0K4YVDBzXOuJodCvah7bjkIDU_m-fasoafFdIb8QkHkEVE.jpg?r=1c0"
                alt="선과 악의 학교"
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
            </CardImage>
          </WrapCardImg>
          <CardInfo>
            <TopInfo>
              <Release>
                <RatingIcon rating={"12"} />
                <span style={{ marginLeft: "8px" }}>2022</span>
              </Release>
              <Pick>
                <IconBtn type={"addPick"} />
              </Pick>
            </TopInfo>
            <BottomInfo>
              절친 소피와 아가사는 어느 날 신비한 존재에 의해 마법 학교로 휩쓸려
              간다. 이 학교는 미래의 동화 속 영웅과 악당을 키워내는 곳. 운명을
              알 길 없는 이곳에서 두 친구의 우정은 계속될 수 있을까.
            </BottomInfo>
          </CardInfo>
        </InnerCard>
        <InnerCard>
          <WrapCardImg>
            <CardImage>
              <img
                src="https://occ-0-3681-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS-FV6NBupz9L_j3CgzAGkIFDZKOuEDVSZOUf41UcTqPvrlre4Pv2bbPOzNAqZbyJsSpuCq-NP7Vn4n8ZJ4tHDxw--f6rBofeI1m35nsHIiEzQuSrj1GaGXu8-YYNGmWubBg.jpg?r=95d"
                alt="두 리벤지"
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
            </CardImage>
          </WrapCardImg>
          <CardInfo>
            <TopInfo>
              <Release>
                <RatingIcon rating={"18"} />
                <span style={{ marginLeft: "8px" }}>2022</span>
              </Release>
              <Pick>
                <IconBtn type={"addPick"} />
              </Pick>
            </TopInfo>
            <BottomInfo>
              여기는 상류층 자제들이 모인 초호화 사립 고등학교. 최고의 인기녀
              자리에서 한순간에 몰락한 여학생이 수수한 전학생과 비밀리에 손을
              잡는다. 서로의 원수에게 복수하기 위해.
            </BottomInfo>
          </CardInfo>
        </InnerCard>
        <InnerCard>
          <WrapCardImg>
            <CardImage>
              <img
                src="https://occ-0-3681-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXG6glwYxNjqPvDNLGU3MUWmlE-8m8qSb2Mdi5KcUvmdwe4AN8bs-WkE6FtEVy56s3EW_Poo8X4nw8wu-EflP75_QqCDjVAjfCg6zQM2aOGnEj8T0HKqVFAQcGpy0JXDaLO9.jpg?r=6b6"
                alt="블랙의 신부"
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
            </CardImage>
          </WrapCardImg>
          <CardInfo>
            <TopInfo>
              <Release>
                <RatingIcon rating={"15"} />
                <span style={{ marginLeft: "8px" }}>2022</span>
              </Release>
              <Pick>
                <IconBtn type={"addPick"} />
              </Pick>
            </TopInfo>
            <BottomInfo>
              최상류층 고객만 모시는 결혼정보회사. 이곳에 발을 들인 한 여자가
              전남편의 애인에게 복수할 기회를 엿본다.
            </BottomInfo>
          </CardInfo>
        </InnerCard>
      </MoreLikeThisContainer>
    </div>
  );
};

const MoreLikeThisContainer = styled.div`
  width: 100%;
  max-height: 150em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  align-items: stretch;
  justify-content: stretch;
  box-sizing: inherit;
  font-family: ${(props) => props.theme.regular};
`;

const InnerCard = styled.div`
  box-sizing: inherit;
  height: 100%;
  margin: 0.1rem;
  min-height: 22rem;
  cursor: pointer;
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 38px;
    height: 38px;
    opacity: 0;
  }
  :hover {
    svg {
      opacity: 1;
    }
  }
`;

const CardInfo = styled.div`
  background-color: #2f2f2f;
  box-sizing: inherit;
  cursor: pointer;
  min-height: 100%;
`;

const TopInfo = styled.div`
  background-color: #2f2f2f;
  box-sizing: inherit;
  cursor: pointer;
  justify-content: space-between;
  display: flex;
  padding: 1rem;
  padding-top: 22px;
`;

const Release = styled.div`
  box-sizing: inherit;
  cursor: pointer;
  margin-top: 14px;
  margin-left: 8px;
  margin-bottom: 5px;
  font-size: 16px;
  svg {
    opacity: 1;
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const Pick = styled.div`
  width: 42px;
  height: 42px;
  box-sizing: inherit;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 1;
    margin-bottom: 0.5px;
  }
`;

const BottomInfo = styled.div`
  box-sizing: inherit;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  padding: 0 1em 1em;
  color: #d2d2d2;
`;

export default SummaryContents;
