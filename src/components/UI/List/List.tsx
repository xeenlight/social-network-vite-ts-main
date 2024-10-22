import { StyledList } from "./List.style";


type ListProps = {
    title: string;
    count: number;
    children?: React.ReactNode; 
};

export const List: React.FC<ListProps> = ({ title, count, children }) => {
    return (
        <StyledList>
            <div className="List__title">
                <h2>{title}</h2>
                <span className="count">{count}</span>
            </div>
            <div className="List__content">
                {children} 
            </div>
        </StyledList>
    );
};



