import { StyledNavBarItem } from "./NavBarItem.style";

type FillRule = "nonzero" | "evenodd" | "inherit" | undefined;

interface NavBarItemProps {
  name: string;
  notificationCount: number;
  id: string;
  paths: string[];
  iconName: string;
  fillRule?: FillRule; 
  clipRule?: FillRule; 
}


export const NavBarItem: React.FC<NavBarItemProps> = ({
  name,
  notificationCount,
  id,
  paths,
  iconName,
  fillRule,
  clipRule,
}) => {
  return (
    <StyledNavBarItem>
      <li className="navbar__item">
        <svg
          className={iconName}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id={id}>
            {paths.map((d, index) => (
              <path key={index} d={d} fillRule={fillRule} clipRule={clipRule} />
            ))}
          </g>
        </svg>
        <p className="item__name">{name}</p>
        <span className="Badge">{notificationCount}</span>
      </li>
    </StyledNavBarItem>
  );
};
