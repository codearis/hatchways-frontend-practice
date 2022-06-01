import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";

export const AppH1 = ({ children }: AppTypes) => {
  return <H1>{children}</H1>;
};

const H1 = styled.h1`
  color: ${(props) => props.color};
  font-size: 2em;
`;
