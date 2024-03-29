import styled from "styled-components";
import { StyledParagraph } from "../../styles/StyledParagraph";
import { StyledSpan } from "../../styles/StyledSpan";
import { FlexWrapper } from "../../styles/FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <StyledParagraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas molestias labore adipisci doloribus, quod a autem velit similique perferendis obcaecati ducimus maiores ratione eaque assumenda, excepturi modi eos aperiam eum?</StyledParagraph>
          <StyledSpan>krrkes@gmail.com</StyledSpan>
        </Slide>
      </FlexWrapper>
    </StyledSlider>
  );
}

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`

const Slide = styled.div`
  text-align: center;
`