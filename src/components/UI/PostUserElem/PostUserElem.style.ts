import styled from "styled-components";

export const StyledPostUserElem = styled.div`
  cursor: default;
  padding: 0;
  

  .PostUserElem {
    font-size: 16px;
    display: flex; 
    align-items: center;
    margin-bottom: 30px;
    
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
  .secondary__text {
    margin-top: 5px; 
  }
`;
