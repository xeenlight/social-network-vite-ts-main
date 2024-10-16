import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading";
import { Linktext } from "../../components/Typography/Linktext";
import { Button } from "../../components/UI/Button/Button";

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="LoginPage">
      <Heading headingText="Авторизация"/>
      <form action="#">
        <input type="tel" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
        <Button buttonText="Войти"/>
      </form>
      <Linktext text="Забыли пароль?"/>
      <div className="registration">
        <span>
          У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">
          <a className="reg__link google-link" href="#">
            <img src="./img/icons/google.svg" alt="Google" />
          </a>
          <a className="reg__link google-plus-link" href="#">
            <img src="./img/icons/google-plus.svg" alt="Google Plus" />
          </a>
          <a className="reg__link yandex-link" href="#">
            <img src="./img/icons/yandex.svg" alt="Yandex" />
          </a>
          <a className="reg__link mail-ru-link" href="#">
            <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};