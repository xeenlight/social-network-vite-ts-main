import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./ForgotPassword.scss";

export const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate(); 

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    navigate("/phoneSMS-page");
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
          <button disabled={!phoneNumber}>Отправить</button>
        </form>
      </div>
    </div>
  );
};
