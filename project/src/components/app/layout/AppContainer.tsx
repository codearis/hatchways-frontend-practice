import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";

export const AppContainer = ({ children }: AppTypes) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 16px;
`;
