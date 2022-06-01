import styled from "styled-components";
import { AppTypes } from "../../../types/AppTypes";
import { StyledTypes } from "../../../types/StyledTypes";

export const AppInput = ({ children, ...otherProps }: AppTypes) => {
  return <Input {...otherProps}>{children}</Input>;
};

const Input = styled.input<StyledTypes>`
  display: flex;
  flex: 1 1;
  border: 1px solid black;
  border-radius: 6px;
  padding: 2px 6px;
  margin: 0;
  height: 40px;
  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;
