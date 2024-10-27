import styled from "styled-components";

export const StyledProfileUser = styled.div`
  grid-area: P;
  height: 440px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--elems-bgc);
  box-shadow: 0 0 10px var(--light-gray);
  position: relative;

  .icon-edit {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;

    width: 40px;
    height: 40px;
    fill: white;

    transition: 200ms;

    &:hover {
      filter: drop-shadow(0 0 10px var(--prime-color));
    }

    &:active {
      scale: 0.9;
      transition: 100ms;
    }
  }

  .user__info {
    display: inline-flex;
    align-items: center;

    gap: calc(3.8vw - 34px); //? 40 - 1920 | 20 - 1400
    border-top: 1px solid var(--light-gray);
    padding-top: 20px;

    .parameter {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      border-radius: 12px;
      padding: 10px;
      transition: 200ms;

      &:hover {
        background-color: var(--light-gray);
      }

      .value {
        color: var(--gray);
      }
    }
  }

  .user__name {
    margin-bottom: 15px;
  }

  .profile-background {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    background: rgb(44, 40, 113);
    background: linear-gradient(
      90deg,
      rgba(44, 40, 113, 1) 0%,
      rgba(171, 101, 128, 1) 37%,
      rgba(195, 223, 176, 1) 89%,
      rgba(203, 207, 150, 1) 99%
    );
    background-size: 200% 200%;
    animation: wallpaper-anim 2s ease infinite;
  }

  .user__block {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    padding: 20px;
    padding-left: calc(3.9vw + 165px); //? 180 - 375 | 240 - 1920
    background-color: var(--elems-bgc);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
      height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
      object-fit: cover;
      border: 5px solid var(--elems-bgc);
      border-radius: 50%;

      position: absolute;
      top: -56px;
      left: 30px;
    }

    .buttons-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  button {
    cursor: pointer;
    padding: 12px 15px;
    font-size: inherit;
    border-radius: 10px;
    background-color: var(--prime-color);
    color: white;
    transition: 200ms;

    &:disabled {
      background-color: var(--disabled-bgc);
    }

    &.primary {
      background-color: var(--prime-color);
      color: white;
    }

    &.secondary {
      background-color: var(--light-gray);
      color: var(--placeholder-color);
    }

    &:disabled:hover {
      cursor: default;
      opacity: 0.5;
    }

    &:hover {
      translate: 0 -5px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
    }

    &:active {
      transition: 100ms;
      translate: 0 0;
      box-shadow: none;
    }
  }

  @media (max-width: 730px) {
    margin-bottom: 20px;
  }
  @media (max-width: 1750px) {
    height: 300px;
  }
  @media (max-width: 1750px) {
    .user__block {
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;

      padding: 20px;

      img {
        width: 130px;
        height: 130px;
        top: -75px;
        left: 50px;
      }

      .user__description {
        width: 100%;
      }

      .user__info {
        width: 100%;

        .parameter {
          flex: 1 1 33.333%;
          text-align: center;
        }
      }

      .user__name {
        text-align: right;
      }

      .buttons-wrapper {
        width: 100%;
        flex-direction: row;

        button {
          flex: 1 1 50%;
        }
      }
    }
  }
`;
