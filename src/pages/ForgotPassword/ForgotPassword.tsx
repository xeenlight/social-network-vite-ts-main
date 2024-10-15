import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button/Button";
import "./ForgotPassword.scss";

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
    <div className="container">
      <div className="ForgotPassword">
        <h1>Забыли пароль?</h1>
        <p>Укажите свой номер телефона, чтобы получить код для сброса пароля.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Номер телефона"
            value={phoneNumber}
            onChange={handleInputChange}
          />
          <Button type="submit" disabled={!phoneNumber} buttonText="Отправить"/>
            

        </form>
      </div>
    </div>
  );
};
