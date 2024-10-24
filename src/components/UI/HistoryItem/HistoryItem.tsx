import { StyledHistoryItem } from "./HistoryItem.style";

type HistoryItemProps = {
    title?: string;
    imgSrc?: string;
    imgAlt?: string;
    isAddHistory?: boolean; 
    posterSrc?: string; 
    posterAlt?: string; 
    ownerImgSrc?: string; 
    ownerImgAlt?: string; 
    ownerName?: string; 
};

export const HistoryItem: React.FC<HistoryItemProps> = ({
    title,
    imgSrc,
    imgAlt,
    isAddHistory ,
    posterSrc,
    posterAlt , 
    ownerImgSrc , 
    ownerImgAlt , 
    ownerName 
}) => (
    <StyledHistoryItem>
        {isAddHistory ? (
            <div className="History__item add-history">
                <div className="icon-wrapper">
                    <svg
                        className="icon icon-plus"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                    >
                        <g>
                            <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
                        </g>
                    </svg>
                    <span>{title}</span>
                </div>
                <img src={imgSrc} alt={imgAlt} />
            </div>
        ) : (
            <div className="History__item">
                <img src={posterSrc} alt={posterAlt} />
                <div className="History__owner">
                    <img
                        className="owner__img"
                        src={ownerImgSrc}
                        alt={ownerImgAlt}
                    />
                    <span className="owner__name">{ownerName}</span>
                </div>
            </div>
        )}
    </StyledHistoryItem>
);
