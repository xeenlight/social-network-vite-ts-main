import { StyledPostRepost } from "./PostRepost.style";

interface PostRepostProps {
    children: React.ReactNode; 
}

export const PostRepost: React.FC<PostRepostProps> = ({ children }) => {
    return (
        <StyledPostRepost>
            {children}
        </StyledPostRepost>
    );
};
