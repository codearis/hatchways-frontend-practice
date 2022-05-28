import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

export const forwardAndBack = keyframes`
0% {
  transform: translateX(0%)
}
50% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0%);
  }
`;
