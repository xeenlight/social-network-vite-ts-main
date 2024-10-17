import React, { useState } from "react";
import "./RegistrationPage.scss";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import { useNavigate } from "react-router-dom"; // Используем useNavigate

export const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Инициализация useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    // Логика отправки данных может быть добавлена здесь
    navigate("/profile-page"); // Переход на страницу профиля
  };

  const isFormValid = firstName && lastName && phone && password;

  return (
    <Container>
      <StyledRegistrationPage>
        <Heading headingText="Зарегистрироваться" />
        <form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            placeholder="Ваше Имя" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
          />
          <Input 
            type="text" 
            placeholder="Ваша Фамилия" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
          />
          <Input 
            type="tel" 
            placeholder="Номер телефона" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Пароль" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Button 
            isPrimary={isFormValid} 
            buttonText="Создать аккаунт" 
            
          />
        </form>
      </StyledRegistrationPage>
    </Container>
  );
};
