import styled from "styled-components";

export const StyledBio = styled.div`
  box-shadow: 0 0 10px var(--light-gray);
  padding: calc(1vw + 11px);
  background-color: var(--elems-bgc);
  border-radius: 20px;
  margin-bottom: 20px;

.bio {
  &__data {
    padding-bottom: 30px;
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: 30px;

    .icon {
      width: 24px;
      height: 24px;
    }

    .data__item {
      display: flex;
      align-items: center;
      gap: 8px;

      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }

  &__info {
    margin-bottom: 40px;

    p:not(:last-child) {
      font-size: inherit;
      margin-bottom: 15px;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
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


`;
