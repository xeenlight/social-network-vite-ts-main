import styled from "styled-components";

export const StyledFriendsBlock = styled.div`



  box-shadow: 0 0 10px var(--light-gray);
  padding: calc(1vw + 11px);
  background-color: var(--elems-bgc);
  border-radius: 20px;
  margin-bottom: 20px;

  .Friends__title {
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--prime-color);
      font-weight: 400;
    }
  }

  .Friends__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-auto-rows: auto;
    gap: 20px;
  }

`;
