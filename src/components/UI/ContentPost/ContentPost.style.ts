import styled from "styled-components";

export const StyledContent = styled.div`


    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;

  @media (max-width: 1480px) {

    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-rows: minmax(100px, 200px);
    grid-auto-rows: minmax(100px, 200px);
 
}

 
`;