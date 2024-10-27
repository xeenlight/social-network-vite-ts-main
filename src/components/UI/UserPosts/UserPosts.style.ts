import styled from "styled-components";

export const StyledUserPosts = styled.div`

.UserPosts {
  box-shadow: 0 0 10px var(--light-gray);
  padding: calc(1vw + 11px);
  background-color: var(--elems-bgc);
  border-radius: 20px;
  position: relative;

  .icon {
    width: 20px;
    height: 20px;
    transition: 200ms;
    fill: var(--prime-color);
  }

  &__controls {
    display: flex;
    margin-bottom: 20px;

    .tabs {
      flex: 1 1 auto;

      display: flex;
      align-items: center;
      gap: 15px;

      .tab {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px;
        border-radius: 10px;
        border: 1px solid transparent;

        transition: 200ms;

        &._active {
          border-color: var(--light-gray);
          background-color: var(--bgc);
        }

        &:hover {
          border-color: var(--light-gray);
          background-color: var(--bgc);
        }

        &:active {
          background-color: var(--prime-color);
          color: white;
          transition: 100ms;

          .icon {
            fill: white;
          }
        }
      }
    }

    .upload-media {
      cursor: pointer;
      flex: 0 1 auto;

      display: flex;
      align-items: center;
      gap: 5px;

      padding: 8px;
      border: 1px solid transparent;
      border-radius: 10px;

      transition: 200ms;

      .icon {
        width: 15px;
        height: 15px;
        fill: var(--prime-color);
      }

      &:hover {
        border-color: var(--light-gray);
        background-color: var(--bgc);
      }

      &:active {
        transition: 100ms;
        background-color: var(--prime-color);
        color: white;

        .icon {
          fill: white;
        }
      }
    }
  }

  .media-container {
    margin-bottom: 20px;
  }

  .show-all {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid transparent;
    transition: 200ms;

    margin: 0 0 0 auto;
    width: fit-content;

    .icon {
      width: 15px;
      height: 15px;
      fill: var(--prime-color);
      rotate: -90deg;
    }

    &:hover {
      border-color: var(--light-gray);
      background-color: var(--bgc);
    }

    &:active {
      transition: 100ms;
      background-color: var(--prime-color);
      color: white;

      .icon {
        fill: white;
      }
    }
  }
}
`;
