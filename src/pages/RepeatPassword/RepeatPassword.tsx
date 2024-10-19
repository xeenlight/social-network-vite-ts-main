import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Heading } from "../../components/Typography/Heading";
import { Paragraph } from "../../components/Typography/Paragraph";
import { Input } from "../../components/UI/Input/Input";
import { StyledRepeatPassword } from "./RepeatPassword.style";


export const RepeatPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate(); 

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePasswords(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePasswords(password, newConfirmPassword);
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password.length >= 8 && password === confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isButtonDisabled) {
      navigate("/");
    }
  };

  return (
    <Container>
      <StyledRepeatPassword>
        <Heading headingText="Придумайте пароль" />
        <Paragraph
          headingText="Введите новый пароль для вашей учетной записи. Пароль должен содержать не менее 8 символов, включая заглавные и строчные буквы, цифры и специальные символы."
        />
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            placeholder="Введите новый пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          <Input
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <Button
            type="submit"
            isPrimary={!isButtonDisabled}
            buttonText="Восстановить пароль"
          />
        </form>
        </StyledRepeatPassword>
    </Container>
  );
};
