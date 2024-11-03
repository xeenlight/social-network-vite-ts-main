import styled, {css} from "styled-components";

interface IStyleedPostProps{
  $isLiked:boolean
  $isMarked:boolean
}

export const StyledPost = styled.div<IStyleedPostProps>`

  display: grid;
  grid-template-columns: repeat(3, auto) 2fr;
  justify-content: center;
  align-items: center;
  gap: 15px;
  .icon-wrapper {
    cursor: pointer;
    padding: 10px;
    background-color: ${props => props.theme.colors.bgc};
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      background-color: ${props => props.theme.colors.lightGray};
    }

    .count {
      color: ${props => props.theme.colors.darkGray};
      font-weight: 400;
    }

    .icon {
      height: 25px;
      overflow: visible;
      fill: transparent;
      transition: 200ms;
    }

    .icon-like {
      stroke: ${props => props.theme.colors.darkGray};
      stroke-width: 2px;
    }

    .icon-mark {
      stroke: ${props => props.theme.colors.darkGray};
      stroke-width: 2px;
    }

    &.mark {
      justify-self: self-end;
    }
  }
${props => props.$isLiked && css`
  .icon-wrapper {
      .icon-like {
        fill: ${props => props.theme.colors.red};
        stroke: 0;
        stroke-width: 0;
      }

      .likes-count {
        color: ${props => props.theme.colors.red};
      }
    }
`}

${props => props.$isMarked && css`
  .icon-wrapper {
      .icon-mark {
        fill:  ${props => props.theme.colors.primeColor};
        stroke: 0;
        stroke-width: 0;
      }
    }
`}

  




`;
