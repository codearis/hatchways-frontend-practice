import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppH2 = ({ children, ...otherProps }: AppTypes) => {
  return <H2 {...otherProps}>{children}</H2>;
};

const H2 = styled.h2<StyledTypes>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
`;
