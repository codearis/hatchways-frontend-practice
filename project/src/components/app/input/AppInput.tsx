import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppInput = ({ children, ...otherProps }: AppTypes) => {
  return <Input {...otherProps}>{children}</Input>;
};

const Input = styled.input<StyledTypes>`
  display: flex;
  flex: 1 1;
  /* border-bottom: 1px solid black; */
  padding: 2px 10px;
  margin: 0;
  height: 44px;
  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;
