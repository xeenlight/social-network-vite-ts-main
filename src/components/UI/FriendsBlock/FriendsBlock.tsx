import { StyledFriendsBlock } from "./FriendsBlock.style";

type FriendsBlockProps = {
    friends: number;
    children?: React.ReactNode; 
};

export const FriendsBlock: React.FC<FriendsBlockProps> = ({
    friends,
    children, 
}) => {
  return (
    <StyledFriendsBlock>
      <div className="Friends__title">
        <h2>Друзья</h2>
        <span className="count">{friends}</span>
      </div>
      <div className="Friends__wrapper">
        {children}
      </div>
    </StyledFriendsBlock>
  );
};
