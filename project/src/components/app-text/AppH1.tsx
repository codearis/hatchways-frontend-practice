import styled from "styled-components";
import { AppTypes } from "../../types/App";

export const AppH1 = ({ children }: AppTypes) => {
  return <H1 color="blue">{children}</H1>;
};

const H1 = styled.h1`
  color: ${(props) => props.color};
`;
