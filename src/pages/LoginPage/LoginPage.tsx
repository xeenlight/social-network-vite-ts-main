import { Heading } from "../../components/Typography/Heading";
import { Linktext } from "../../components/Typography/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormScheme = yup.object({
  userEmail: yup.string().required("Обязательное поле").email("Введите коректно свою почту"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать более 8 цифр"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });
  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)} action="#">
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input type="email" placeholder="Ваша почта" errorText={errors.userEmail?.message} isError={errors.userEmail ? true : false} {...field} />
            )}
          />

          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input type="password" placeholder="Пароль" errorText={errors.userPassword?.message} isError={errors.userPassword ? true : false}  {...field} />
            )}
          />

          <Button isPrimary={true} buttonText="Войти" />
        </form>
        <Linktext text="Забыли пароль?" href="/forgotPassword-page" />
        <RegistrationInfo />
      </StyledLoginPage>
    </Container>
  );
};
