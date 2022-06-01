import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppButton = ({ children, ...otherProps }: AppTypes) => {
  return <Button {...otherProps}>{children}</Button>;
};

const Button = styled.button<StyledTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 400;
  width: 200px;
  background: #ed6044;
  border-radius: 6px;
`;
