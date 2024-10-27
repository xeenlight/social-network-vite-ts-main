import { StyledContainerProfile} from "./ContainerProfile.style";

interface ContainerPageProps {
    children: React.ReactNode; 
}

export const ContainerProfile: React.FC<ContainerPageProps> = ({ children }) => {
    return (
        <StyledContainerProfile>
        <div className="ProfilePage">

            { children }


      </div>
        </StyledContainerProfile>
    );
};
