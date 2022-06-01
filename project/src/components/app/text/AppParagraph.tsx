import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppParagraph = ({ children, ...otherProps }: AppTypes) => {
  return <Paragraph {...otherProps}>{children}</Paragraph>;
};

const Paragraph = styled.p<StyledTypes>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
`;
