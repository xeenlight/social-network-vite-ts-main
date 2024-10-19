import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Input } from "../../components/UI/Input/Input";
import { Heading } from "../../components/Typography/Heading";
import { Paragraph } from "../../components/Typography/Paragraph";
import { StyledForgotPassword } from "./ForgotPassword.style";

export const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      navigate("/phoneSMS-page");
    }
  };

  return (
    <Container>
      <StyledForgotPassword>
        <Heading headingText="Забыли пароль?" />
        <Paragraph headingText="Укажите свой номер телефона, чтобы получить код для сброса пароля." />
        <form onSubmit={handleSubmit}>
          <Input
            type="tel"
            placeholder="Номер телефона"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            isPrimary={phoneNumber}
            buttonText="Отправить"
          />
        </form>
        </StyledForgotPassword>
    </Container>
  );
};
