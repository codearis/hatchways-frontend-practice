import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppSpan = ({ children, ...otherProps }: AppTypes) => {
  return <Span {...otherProps}>{children}</Span>;
};

const Span = styled.span<StyledTypes>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
`;
