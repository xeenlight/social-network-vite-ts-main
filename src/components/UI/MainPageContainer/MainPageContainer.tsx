import { StyledMainPage } from "./MainPageContainer.style";

interface MainPageProps {
    children: React.ReactNode; 
}

export const MainPageContainer: React.FC<MainPageProps> = ({ children }) => {
    return (
        <StyledMainPage>
            {children}
        </StyledMainPage>
    );
};
