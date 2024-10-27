import styled from "styled-components";

export const StyledMusic = styled.div`
  cursor: pointer;
  position: relative;
  list-style: none;

  display: flex;
  align-items: center;
  gap: 15px;

  padding: 15px;
  border-radius: 15px;

  transition: 200ms;
  justify-content: space-between;

  &:hover {
    background-color: var(--light-gray);
  }

  img {
    flex: 0 0 70px;
    height: 70px;
    width: 70px;
    border-radius: 5px;
    object-fit: cover;
  }

  .music__description {
    flex: 1 1 auto;

    .main__text {
      margin-bottom: 5px;
      display: inline-block;
    }
  }

  .plus-button {
    flex: 0 0 24px;
    height: 24px;

    border: 2px solid var(--prime-color);
    border-radius: 50%;

    position: relative;

    &::before {
      content: "";
      border-radius: 5px;
      height: 2px;
      width: 70%;
      background-color: var(--prime-color);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 200ms;
    }

    &::after {
      content: "";
      border-radius: 5px;
      width: 2px;
      height: 70%;
      background-color: var(--prime-color);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 200ms;
    }

    &._active {
      &::after {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }
  .user__description {
    flex: 1 1 auto;

    .main__text {
      margin-bottom: 5px;
      display: inline-block;
    }
  }
`;
