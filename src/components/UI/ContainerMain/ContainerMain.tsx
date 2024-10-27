import { StyledContainerMain} from "./ContainerMain.style";

interface ContainerPageProps {
    children: React.ReactNode; 
}

export const ContainerMain: React.FC<ContainerPageProps> = ({ children }) => {
    return (
        <StyledContainerMain>
        <div className="MainPage">

            { children }


      </div>
        </StyledContainerMain>
    );
};
