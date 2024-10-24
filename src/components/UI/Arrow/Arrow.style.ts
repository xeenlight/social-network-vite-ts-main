import styled from "styled-components";

export const StyledArrow = styled.div`


    cursor: pointer;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    z-index: 2;

    width: 40px;
    height: 40px;
    transition: 200ms;

    &:hover {
      scale: 1.1;
      filter: drop-shadow(0 0 10px var(--prime-color));
    }

    &:active {
      transition: 100ms;
      scale: 0.9;
      filter: none;
    }

`;
