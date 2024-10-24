import styled from "styled-components";

export const StyledPostUserElem = styled.div`
  cursor: default;
  padding: 0;
  margin-bottom: 30px;

  .PostUserElem {
    font-size: calc(0.8vw + 4px);
    display: flex; 
    align-items: center;
  }

  img {
    flex: 0 0 60px; 
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user__description {
    margin-left: 10px; 
  }
`;
