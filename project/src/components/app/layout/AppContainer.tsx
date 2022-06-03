import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";

export const AppContainer = ({ children }: AppTypes) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
