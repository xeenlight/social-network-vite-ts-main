import { useState, useEffect } from "react";
import "./PhoneSMS.scss";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Heading } from "../../components/Typography/Heading";
import { Paragraph } from "../../components/Typography/Paragraph";
import { Input } from "../../components/UI/Input/Input";

export const PhoneSMS = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleInputChange = (value, index) => {
    if (/^\d$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Переход на следующее поле при вводе цифры
      if (value && index < 3) {
        document.getElementById(`input-${index + 1}`).focus();
      }

      // Проверка, заполнены ли все инпуты
      if (newCode.every((digit) => digit !== "")) {
        navigate("/repeatPassword-page");
      }
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      document.getElementById(`input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно добавить логику для проверки правильности кода
  };

  return (
    <Container>
      <div className="PhoneSMS">
        <Heading headingText="Введите код" />
        <Paragraph
          headingText="Пожалуйста, введите код из SMS, который был отправлен на ваш номер
          телефона"
        />
        <span>{`${Math.floor(timer / 60)}:${(timer % 60)
          .toString()
          .padStart(2, "0")}`}</span>
        <form onSubmit={handleSubmit}>
          <div className="code">
            {code.map((value, index) => (
              <Input
                key={index}
                id={`input-${index}`}
                type="text"
                value={value}
                maxLength="1"
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyUp={(e) => handleKeyUp(e, index)}
              />
            ))}
          </div>
          <div className="noCode">
          <Paragraph 
              headingText="Код не пришел?" 
              linkText="Отправить повторно" 
              linkHref="/forgotPassword-page" 
            />
          </div>
        </form>
      </div>
    </Container>
  );
};
