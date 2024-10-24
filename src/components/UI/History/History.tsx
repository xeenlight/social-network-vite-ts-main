import { StyledHistory } from "./History.style";

export const History: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <StyledHistory>
      <div className="History">
        <div className="History__wrapper">
          {children}
        </div>
      </div>
    </StyledHistory>
  );
  