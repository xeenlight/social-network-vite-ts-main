import { Heading } from "../../components/Typography/Heading";
import { Linktext } from "../../components/Typography/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as yup from "yup";
import { useLoginUserMutation } from "../../Store/Api/authApi";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormScheme = yup.object({
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите коректно свою почту"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать более 6 цифр"),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { data: newData }] = useLoginUserMutation();


  useEffect(() => {
    if (newData?.user_id) {
      console.log(newData);
    }
  }, [newData, navigate]);

  const [loginError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginUser({ email: data.useremail, password: data.userpassword });
  };

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Ваша почта"
                errorText={errors.useremail?.message || loginError} // Display error message
                isError={!!errors.useremail || !!loginError}
                {...field}
              />
            )}
          />

          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Пароль"
                errorText={errors.userpassword?.message}
                isError={!!errors.userpassword}
                {...field}
              />
            )}
          />

          <Button isPrimary={isValid} buttonText="Войти" />
        </form>
        <Linktext text="Забыли пароль?" href="/forgotPassword-page" />
        <RegistrationInfo />
      </StyledLoginPage>
    </Container>
  );
};
