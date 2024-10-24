import styled from "styled-components";

export const StyledMore = styled.div`


.icon-more {
  cursor: pointer;
  position: absolute;
  top: calc(1vw + 11px);
  right: calc(1vw + 11px);
  width: 25px;
  padding: 15px;
  box-sizing: content-box;
  border-radius: 15px;

  fill: var(--dark-gray);
  transition: 200ms;

  &:hover {
    background-color: var(--light-gray);
  }

  &:active {
    transition: 100ms;
    background-color: var(--prime-color);
    fill: white;
  }
}

`;
