import { StyledFriends } from "./Friends.style";

type FriendsProps = {
  friendPhoto: string;
  friendAlt: string;
  friendName: string;
};

export const Friends: React.FC<FriendsProps> = ({
  friendPhoto,
  friendAlt,
  friendName,
}) => {
  return (
    <StyledFriends>
      <div className="friend">
        <img src={friendPhoto} alt={friendAlt} />
        <span className="friend__name">{friendName}</span>
      </div>
    </StyledFriends>
  );
};
