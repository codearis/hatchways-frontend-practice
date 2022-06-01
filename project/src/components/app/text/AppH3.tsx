import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppH3 = ({ children, ...otherProps }: AppTypes) => {
  return <H3 {...otherProps}>{children}</H3>;
};

const H3 = styled.h3<StyledTypes>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  margin: 0;
`;
