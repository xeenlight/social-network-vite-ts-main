import { StyledUserElem } from "./UserElem.style";

type UserElemProps = {
    imgSrc: string;
    mainText?: string;
    mainTextLink?:string;
    secondaryText?: string;
    badgeCount?: number;
    isOnline?: boolean;
    isActive?: boolean; 
    href?:string;
};

export const UserElem: React.FC<UserElemProps> = ({
    imgSrc,
    mainText,
    mainTextLink,
    secondaryText,
    badgeCount,
    isOnline,
    isActive, 
    href,
}) => {
    return (
        <StyledUserElem>
            <img src={imgSrc} alt="User" />
            <div className="user__description">

                <a href={href} className="main__text">{mainTextLink}</a>
                <p className="main__text">{mainText}</p>
                <p className="secondary__text">{secondaryText}</p>
                {isOnline && <p className="secondary__text _online">Онлайн</p>}
            </div>
            {badgeCount !== undefined && <span className="Badge">{badgeCount}</span>}
            {isActive !== undefined && <div className={`plus-button ${isActive ? '_active' : ''}`}></div>}
            </StyledUserElem>
    );
};
