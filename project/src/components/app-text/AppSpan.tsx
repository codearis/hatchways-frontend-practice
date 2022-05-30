import styled from "styled-components";
import { AppTypes } from "../../types/App";

export const AppSpan = ({ children }: AppTypes) => {
  return <Span color="blue">{children}</Span>;
};

const Span = styled.span`
  color: ${(props) => props.color};
`;
