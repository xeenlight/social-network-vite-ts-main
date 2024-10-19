import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style"; 
import { Input } from "../../components/UI/Input/Input";
import { Heading } from "../../components/Typography/Heading";
import { Paragraph } from "../../components/Typography/Paragraph";
import { StyledForgotPassword } from "./ForgotPassword.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

interface IPasswordForm {
  userEmail: string; 
}

// Sample list of registered emails (this could be replaced with an API call)
const registeredEmails = ["user1@example.com", "user2@example.com"];

const PasswordFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите корректно свою почту")
});

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<IPasswordForm>({
    resolver: yupResolver(PasswordFormScheme),
    defaultValues: {
      userEmail: "",
    },
  });

  const onPasswordSubmit: SubmitHandler<IPasswordForm> = (data) => {
    // Check if the email is registered
    if (!registeredEmails.includes(data.userEmail)) {
      setError("userEmail", {
        type: "manual",
        message: "Этот Email не зарегистрирован",
      });
      return;
    }
    
    // Proceed if the email is registered
    console.log(data);
    navigate('/phoneSMS-page');
  };

  return (
    <Container>
      <StyledForgotPassword>
        <Heading headingText="Забыли пароль?" />
        <Paragraph headingText="Укажите свой номер телефона, чтобы получить код для сброса пароля." />
        <form onSubmit={handleSubmit(onPasswordSubmit)} action="#">
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input
                type="email" 
                placeholder="Ваш текущий Email"
                errorText={errors.userEmail?.message} 
                isError={!!errors.userEmail} 
                {...field}
              />
            )}
          />

          <Button type="submit" isPrimary={isValid} buttonText="Отправить" />
        </form>
      </StyledForgotPassword>
    </Container>
  );
};
