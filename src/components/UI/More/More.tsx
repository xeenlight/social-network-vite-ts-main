import { useState } from "react"; 
import { StyledMore } from "./More.style"; 
import { PostSettings } from "./PostSettings"; // Импортируйте компонент PostSettings 
 
export const More = () => { 
  const [isSettingOpen, setIsSettingOpen] = useState(false); 
 
  // Обработчики кликов 
  const handleEditClick = () => { 
    console.log("Edit clicked"); 
    // Ваша логика редактирования 
  }; 
 
  const handleDeleteClick = () => { 
    console.log("Delete clicked"); 
    // Ваша логика удаления 
  }; 
 
  return ( 
    <StyledMore> 
      <svg 
        className="icon icon-more" 
        viewBox="0 0 25 5" 
        xmlns="http://www.w3.org/2000/svg" 
        onClick={() => setIsSettingOpen(!isSettingOpen)} 
      > 
        <g id="more"> 
          <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" /> 
          <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" /> 
          <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" /> 
        </g> 
      </svg> 
      {isSettingOpen && ( 
        <PostSettings 
          onEditClick={handleEditClick} 
          onDeleteClick={handleDeleteClick} 
        /> 
      )} 
    </StyledMore> 
  ); 
};