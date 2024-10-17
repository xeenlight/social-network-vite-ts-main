import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading";
import { Linktext } from "../../components/Typography/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <Container>
      <StyledLoginPage>
      <Heading headingText="Авторизация"/>
      <form action="#">

        <Input type="tel" placeholder="Номер телефона" />
        <Input type="password" placeholder="Пароль" />
        <Button isPrimary={true} buttonText="Войти"/>
      </form>
      <Linktext text="Забыли пароль?" href="/forgotPassword-page" />
      <RegistrationInfo/>
      </StyledLoginPage>
    </Container>
  );
};