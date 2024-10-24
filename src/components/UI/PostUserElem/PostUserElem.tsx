import { StyledPostUserElem } from "./PostUserElem.style";

type PostUserElemProps = {
  imgSrc?: string;
  alt?: string;
  href?: string;
  hrefText?: string;
  time?: string;
};

export const PostUserElem: React.FC<PostUserElemProps> = ({
  imgSrc,
  alt,
  href,
  hrefText,
  time,
}) => {
  return (
    <StyledPostUserElem>
      <div className="PostUserElem">
        <img src={imgSrc} alt={alt} />
        <div className="user__description">
          <a href={href} className="main__text">
            {hrefText}
          </a>
          <p className="secondary__text">{time}</p>
        </div>
      </div>
    </StyledPostUserElem>
  );
};
