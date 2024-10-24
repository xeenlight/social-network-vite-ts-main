import { ReactNode } from 'react'; 
import { StyledPost } from "./Post.style";

interface PostProps {
    children: ReactNode; 
}

export const Post: React.FC<PostProps> = ({ children }) => {
    return (
        <StyledPost>
            {children}
        </StyledPost>
    );
};
