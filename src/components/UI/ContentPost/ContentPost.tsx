import { StyledContent } from "./ContentPost.style";

interface ContentProps {
    src: string;
    alt: string;
}

export const Content: React.FC<ContentProps> = ({ src, alt }) => {
    return (
        <StyledContent>
        <img className="media__item" src={src} alt={alt} />
        </StyledContent>
    );
};
