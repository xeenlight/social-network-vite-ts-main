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

const PasswordFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите корректно свою почту"),
});

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IPasswordForm>({
    resolver: yupResolver(PasswordFormScheme),
    defaultValues: {
      userEmail: "",
    },
  });

  const onPasswordSubmit: SubmitHandler<IPasswordForm> = (data) => {
    const storedData = JSON.parse(localStorage.getItem("users") || "[]");
    
    const user = storedData.find((user: { userEmail: string; }) => user.userEmail === data.userEmail);
    
    if (user) {
      navigate('/phoneSMS-page', { state: { email: user.userEmail } }); // Передаем email в state
    } else {
      alert("Email не найден. Пожалуйста, проверьте и попробуйте снова.");
    }
  };
  

  return (
    <Container>
      <StyledForgotPassword>
        <Heading headingText="Забыли пароль?" />
        <Paragraph headingText="Укажите свой Email, чтобы получить код для сброса пароля." />
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
