import { StyledMusic } from "./Music.style";



type MusicProps = {
    imgSrc: string;
    mainText?: string;
    secondaryText?: string;
    isActive?: boolean; 
};

export const Music: React.FC<MusicProps> = ({
    imgSrc,
    mainText,
    secondaryText,
    isActive, 
}) => {
    return (
        <StyledMusic>
            <img src={imgSrc} alt="User" />
            <div className="user__description">
                <p className="main__text">{mainText}</p>
                <p className="secondary__text">{secondaryText}</p>
            </div>
            {isActive !== undefined && <div className={`plus-button ${isActive ? '_active' : ''}`}></div>}
            </StyledMusic>
    );
};




