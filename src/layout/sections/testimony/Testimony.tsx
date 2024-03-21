import styled from "styled-components"
import { StyledSubTitle } from "../../../styles/StyledSubTitle"
import { Icon } from "../../../components/icon/Icon"
import { Slider } from "../../../components/slider/Slider"
import { FlexWrapper } from "../../../styles/FlexWrapper"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Testimony = () => {
  return (
    <StyledTestimony>
      <StyledSubTitle>Testimony</StyledSubTitle>
      <div>
        <Icon iconId={'text'} />
      </div>
      <Carousel />
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  /* div {
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
      <FlexWrapper direction={"column"} align={"center"}>
        <Slider />
      </FlexWrapper>
  </div>,
  <div className="item" data-value="2">
    
      <FlexWrapper direction={"column"} align={"center"}>
        <Slider />
      </FlexWrapper>
  </div>,
  <div className="item" data-value="3">
      <FlexWrapper direction={"column"} align={"center"}>
        <Slider />
      </FlexWrapper>
  </div>,
  <div className="item" data-value="4">
  <FlexWrapper direction={"column"} align={"center"}>
    <Slider />
  </FlexWrapper>
  </div>,
  <div className="item" data-value="5">
      <FlexWrapper direction={"column"} align={"center"}>
        <Slider />
      </FlexWrapper>
  </div>
];

const Carousel = () => (
  <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
  />
);