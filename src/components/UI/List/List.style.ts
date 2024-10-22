import styled from "styled-components";

export const StyledList = styled.div`
  box-shadow: 0 0 10px var(--light-gray);
  background-color: var(--elems-bgc);
  border-radius: 20px;
  padding: calc(1vw + 11px);
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    display: none;
  }

.List__title {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
