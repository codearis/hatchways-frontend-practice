import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppFigure = ({ children, src, alt, ...otherProps }: AppTypes) => {
  return (
    <Figure {...otherProps}>
      <FigImage src={src} alt={alt} />
      <FigCaption>{children}</FigCaption>
    </Figure>
  );
};

const Figure = styled.figure<StyledTypes>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 8px 0px;
`;

const FigImage = styled.img<StyledTypes>`
  display: flex;
  margin: 0;
`;

const FigCaption = styled.figcaption<StyledTypes>`
  display: flex;
  margin: 0;
  font-size: 10px;
`;
