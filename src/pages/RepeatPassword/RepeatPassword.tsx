import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./RepeatPassword.scss";
import { Button } from "../../components/UI/Button/Button";


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
    <div className="container">
      <div className="RepeatPassword">
        <h1>Придумайте пароль</h1>
        <p>Введите новый пароль для вашей учетной записи. Пароль должен содержать не менее 8 символов, включая заглавные и строчные буквы, цифры и специальные символы.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Введите новый пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <Button
          disabled={isButtonDisabled}
          buttonText="Восстановить пароль"
          type="submit"/>
        </form>
      </div>
    </div>
  );
};
