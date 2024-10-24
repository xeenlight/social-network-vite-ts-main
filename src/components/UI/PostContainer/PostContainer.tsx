import { StyledPostContainer } from "./PostContainer.style";

interface PostContainerProps {
    children: React.ReactNode; 
}

export const PostContainer: React.FC<PostContainerProps> = ({ children }) => {
    return (
        <StyledPostContainer>
            {children}
        </StyledPostContainer>
    );
};
