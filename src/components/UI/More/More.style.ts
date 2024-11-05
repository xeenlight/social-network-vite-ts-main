import styled from "styled-components";

export const StyledMore = styled.div`


.icon-more {
  cursor: pointer;
  position: absolute;
  top: calc(1vw + 11px);
  right: calc(1vw + 11px);
  width: 25px;
  padding: 15px;
  box-sizing: content-box;
  border-radius: 15px;

  fill: var(--dark-gray);
  transition: 200ms;

  &:hover {
    background-color: var(--light-gray);
  }

  &:active {
    transition: 100ms;
    background-color: var(--prime-color);
    fill: white;
  }
}

`;


// Стили для контейнера с кнопками "Удалить" и "Изменить"
export const StyledPostSettings = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: white;
  border: 1px solid var(--light-gray);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
  padding: 8px 0;
  width: 150px;
  font-size: 14px;

  /* Тень и плавность появления */
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none; /* Делаем невидимым, пока меню не откроется */
  
  &.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
`;

// Стили для кнопок в меню
export const SettingButton = styled.span`
  display: block;
  padding: 8px 16px;
  color: var(--dark-gray);
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--light-gray);
    color: var(--prime-color);
  }

  &:active {
    background-color: var(--prime-color);
    color: white;
  }

  &:first-child {
    border-bottom: 1px solid var(--light-gray);
  }
`;
