import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Contents from "./Contents";

function ContentsSlider({ title, contentsList }) {
  const contentsRef = useRef();
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    if (!contentsRef.current) return;
    const maxContentsLen = Math.trunc(
      window.innerWidth / contentsRef.current.clientWidth
    );
    setLimit(maxContentsLen);
  }, [limit, contentsRef]);

  const [direction, setDirection] = useState(0);
  const [xaxis, setXaxis] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const handleNextPage = () => {
    if (currentPage === Math.trunc(contentsList.length / limit) - 1) return;
    setCurrentPage((prev) => prev + 1);
    setDirection(1);
  };
  const handlePrevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage((prev) => prev - 1);
    setDirection(-1);
  };

  useEffect(() => {
    if (direction === 1) setXaxis((prev) => prev - window.innerWidth);
    if (direction === -1) {
      if (currentPage === 0) {
        setXaxis(0);
        return;
      }
      setXaxis((prev) => prev + window.innerWidth);
    }
  }, [direction, currentPage]);

  const [paginationIndicator, setPaginationIndicator] = useState([]);
  const sliderRef = useRef();
  useEffect(() => {
    const paginations = [];
    const totalPageCnt = Math.trunc(contentsList.length / limit);
    if (totalPageCnt <= 1) return;
    for (let i = 0; i < totalPageCnt; i++) {
      paginations.push(
        <Pagination
          key={contentsList[i].contentsId + title}
          isCurrentPage={currentPage === i}
          width={`${100 / totalPageCnt - 5}%`}
        />
      );
    }
    setPaginationIndicator(paginations);

    sliderRef.current.style.transform = `translateX(${xaxis}px)`;
  }, [contentsList.length, limit, currentPage, xaxis]);

  const [showPagination, setShowPagination] = useState(false);
  return (
    <Wrapper>
      <Content>
        <Header>{title}</Header>
        <Body>
          <PaginationIndicatorWrapper show={showPagination}>
            <PaginationIndicator>{paginationIndicator}</PaginationIndicator>
          </PaginationIndicatorWrapper>
          <SliderWrapper>
            <Slider ref={sliderRef}>
              {contentsList.map((v) => (
                <Contents
                  key={v.contentsId + title}
                  contents={v}
                  ref={contentsRef}
                />
              ))}
            </Slider>
            <PaginationBtnWrapper>
              <PaginationLeftBtn
                showPrevBtn={currentPage !== 0}
                onClick={handlePrevPage}
                onMouseOver={() => setShowPagination(true)}
                onMouseLeave={() => setShowPagination(false)}
                height={
                  !sliderRef.current
                    ? `0px`
                    : `${sliderRef.current.clientHeight}px`
                }
              >
                <PaginationBtnIcon viewBox="0 0 32 32" fill="none">
                  <path
                    stroke="#FFFFFE"
                    strokeWidth="2"
                    d="M20 6L10 16l10 10"
                  />
                </PaginationBtnIcon>
              </PaginationLeftBtn>
              <PaginationRightBtn
                onClick={handleNextPage}
                onMouseOver={() => setShowPagination(true)}
                onMouseLeave={() => setShowPagination(false)}
                height={
                  !sliderRef.current
                    ? `0px`
                    : `${sliderRef.current.clientHeight}px`
                }
              >
                <PaginationBtnIcon viewBox="0 0 32 32" fill="none">
                  <path stroke="#FFFFFE" strokeWidth="2" d="M13 24l8-8-8-8" />
                </PaginationBtnIcon>
              </PaginationRightBtn>
            </PaginationBtnWrapper>
          </SliderWrapper>
        </Body>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 20%;
`;

const Content = styled.div`
  padding-left: 3%;
`;

const Header = styled.div`
  width: 100%;
  font-size: 2.5rem;
  color: white;
`;

const Body = styled.div`
  padding-bottom: 2%;
  width: 100%;
`;

const PaginationIndicatorWrapper = styled.div`
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 150ms;
`;

const PaginationIndicator = styled.div`
  margin-right: 80px;
  width: 5%;
  height: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const Pagination = styled.div`
  width: ${(props) => props.width};
  height: 3px;
  background-color: ${(props) =>
    props.isCurrentPage ? "#FFFFFF" : props.theme.transparentBgColor};
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  transition-duration: 1s;
`;

const PaginationBtnWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const PaginationRightBtn = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 3;
  padding: 40px;
  width: 30px;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.transparentBgColor};
  opacity: 0;
  transition: opacity 150ms;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const PaginationLeftBtn = styled(PaginationRightBtn)`
  left: -60px;
  height: ${(props) => props.height};
  display: ${(props) => (props.showPrevBtn ? "" : "none")};
`;

const PaginationBtnIcon = styled.svg`
  width: 80px;
`;

export default ContentsSlider;
