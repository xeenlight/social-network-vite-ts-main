import styled from "styled-components";

export const StyledMainPage = styled.div`



  display: grid;
  grid-template-areas: "L M R";
  grid-template-columns: minmax(300px, 360px) auto minmax(300px, 360px);
  gap: 30px;

  .LeftSide {
    grid-area: L;

    .Navbar {
      margin-bottom: 20px;
    }
  }

  .Main {
    grid-area: M;
  }

  .RightSide {
    grid-area: R;

    .List {
      margin-bottom: 20px;
    }
  }


@media (max-width: 1440px) {
  .MainPage {
    grid-template-areas: "L M";
    grid-template-columns: 290px auto;

    .RightSide {
      display: none;
    }
  }
}

@media (max-width: 730px) {
  .MainPage {
    display: block;

    .LeftSide {
      display: none;
    }
  }
}

.Navbar {
  box-shadow: 0 0 10px var(--light-gray);
  border-radius: 20px;
  padding: calc(1vw + 11px);
  background-color: var(--elems-bgc);
  color: var(--text-color);

  .navbar__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

 
}

@media (max-width: 1100px) {
  .MainPage {
    grid-template-columns: min-content auto;

    .LeftSide {
      .List {
        display: none;
      }
    }
  }

}

`;