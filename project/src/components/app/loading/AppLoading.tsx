import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";
import { RotatingLines } from "react-loader-spinner";

export const AppLoading = ({ children, ...otherProps }: AppTypes) => {
  return (
    <Loading {...otherProps}>
      <RotatingLines width="42" />
    </Loading>
  );
};

const Loading = styled.button<StyledTypes>`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
`;
