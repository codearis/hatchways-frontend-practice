import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppH4 = ({ children, ...otherProps }: AppTypes) => {
  return <H4 {...otherProps}>{children}</H4>;
};

const H4 = styled.h4<StyledTypes>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  margin: 0;
`;
