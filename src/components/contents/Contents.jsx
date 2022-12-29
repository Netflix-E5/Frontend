import React, { forwardRef, useState } from "react";
import styled from "styled-components";

import PreviewModal from "./PreviewModal";

import defaultImg from "../../assets/img/test.jpg";

const Contents = forwardRef(({ contents }, ref) => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  return (
    <Wrapper ref={ref}>
      <PreviewModal contents={contents} show={showPreviewModal} muted={true} />
      <ThumbnailWrapper>
        <Thumbnail
          src={contents.thumbnailUrl}
          onError={(e) => (e.target.src = defaultImg)}
          onMouseOver={() => setShowPreviewModal(true)}
          onMouseLeave={() => setShowPreviewModal(false)}
        />
        <Title>{contents.title}</Title>
      </ThumbnailWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  width: 15%;
  height: auto;
  flex: 0 0 auto;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 0.3vw;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

export default Contents;
