import styled from "styled-components";
import { TextTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppH1 = ({ children, ...otherProps }: TextTypes) => {
  return <H1 {...otherProps}>{children}</H1>;
};

const H1 = styled.h1<StyledTypes>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
`;
