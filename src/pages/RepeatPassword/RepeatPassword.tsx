import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Heading } from "../../components/Typography/Heading";
import { Paragraph } from "../../components/Typography/Paragraph";
import { Input } from "../../components/UI/Input/Input";
import { StyledRepeatPassword } from "./RepeatPassword.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom"; 

interface IPasswordForm {
  userPassword: string;
  userPasswordRepeat: string;
}

const PasswordFormScheme = yup.object({
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать не менее 8 символов"),
  userPasswordRepeat: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref('userPassword')], "Пароли не совпадают"),
});

export const RepeatPassword = () => {
  const navigate = useNavigate(); 
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IPasswordForm>({
    resolver: yupResolver(PasswordFormScheme),
    mode: "onChange",
  });

  const onLoginSubmit: SubmitHandler<IPasswordForm> = (data) => {
    console.log(data);
    // Здесь добавьте логику для сохранения нового пароля
    navigate("/");
  };

  return (
    <Container>
      <StyledRepeatPassword>
        <Heading headingText="Придумайте пароль" />
        <Paragraph headingText="Введите новый пароль для вашей учетной записи." />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Введите новый пароль"
                errorText={errors.userPassword?.message}
                isError={!!errors.userPassword}
                {...field}
              />
            )}
          />
          <Controller
            name="userPasswordRepeat"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Повторите пароль"
                errorText={errors.userPasswordRepeat?.message}
                isError={!!errors.userPasswordRepeat}
                {...field}
              />
            )}
          />
          <Button 
            type="submit" 
            isPrimary={isValid} 
            buttonText="Восстановить пароль" 
          />
        </form>
      </StyledRepeatPassword>
    </Container>
  );
};
